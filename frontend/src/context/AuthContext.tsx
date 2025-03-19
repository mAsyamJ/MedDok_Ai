import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContextType, AuthProviderProps, User } from '../types'
import { canisterId, createActor } from '../../../src/declarations/backend'
import { AuthClient } from '@dfinity/auth-client'
import Loading from '../components/Loading'
import { NFIDLogin } from 'ic-auth'

const network = import.meta.env.VITE_DFX_NETWORK
const identityProvider = network === 'ic' ? 'https://identity.ic0.app' : `http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943/`

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<User>({
    actor: undefined,
    authClient: undefined,
    isAuthenticated: false,
    principal: undefined,
  })
  console.log(user)
  const logout = async (): Promise<void> => {
    if (user.authClient) {
      await user.authClient.logout()
      setUser({
        actor: undefined,
        authClient: undefined,
        isAuthenticated: false,
        principal: 'Logged out',
      })
      navigate('/')
      window.location.reload()
    }
  }

  const updateActor = async (role: string = 'patient'): Promise<void> => {
    try {
      const authClient = await AuthClient.create()
      const identity = authClient.getIdentity()
      const actor = createActor(canisterId, { agentOptions: { identity } })
      const isAuthenticated = await authClient.isAuthenticated()
      const principal = isAuthenticated ? identity.getPrincipal().toText() : 'Not Connected'
      if (isAuthenticated) {
        setLoading(true)
        let loggedUser = await actor.getMyProfile()
        if (!loggedUser || (Array.isArray(loggedUser) && loggedUser.length === 0)) {
          loggedUser = await actor.addUser('John Cena', role ?? 'patient')
        }
        setUser({
          actor,
          authClient,
          isAuthenticated,
          principal,
          role: loggedUser[0]?.role,
        })
      } else {
        setUser({ actor, authClient, isAuthenticated, principal })
      }
    } catch (error) {
      console.error('Error fetching user profile:', error)
      indexedDB.deleteDatabase('auth-client-db')
      alert('Error fetching user profile, please try again')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    updateActor()
  }, [])

  const login = async (role: string, provider: string): Promise<void> => {
    if (provider === 'II') {
      await user?.authClient?.login({
        identityProvider,
        onSuccess: () => updateActor(role),
      })
    } else if (provider === 'NFID') {
      await NFIDLogin()
      updateActor(role)
    } else {
      throw new Error('Unsupported provider')
    }
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{loading ? <Loading /> : children}</AuthContext.Provider>
}
