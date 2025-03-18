import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContextType, AuthProviderProps, User } from '../types';
import { canisterId, createActor } from '../../../src/declarations/backend';
import { AuthClient } from '@dfinity/auth-client';
import Loading from '../components/Loading';
import { NFIDLogin } from 'ic-auth';

// Definisi tipe untuk AuthContext
const network = import.meta.env.VITE_DFX_NETWORK;
const identityProvider =
  network === 'ic'
    ? 'https://identity.ic0.app'
    : `http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943/`;
// Buat context dengan default value
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User>({
    actor: undefined,
    authClient: undefined,
    isAuthenticated: false,
    principal: undefined,
  });
  const logout = async () => {
    if (user.authClient) {
      await (user.authClient as AuthClient).logout();
      setUser((prev) => ({
        ...prev,
        actor: undefined,
        authClient: undefined,
        isAuthenticated: false,
        principal: 'Logged out',
      }));
      navigate('/');
      window.location.reload();
    }
  };
  const updateActor = async (role?: string) => {
    const authClient = await AuthClient.create();
    const identity = authClient.getIdentity();
    const actor = createActor(canisterId, {
      agentOptions: { identity },
    });

    const isAuthenticated = await authClient.isAuthenticated();
    const principal = isAuthenticated
      ? authClient.getIdentity().getPrincipal().toText()
      : 'Not Connected';
    if (isAuthenticated) {
      setLoading(true);
      let loggedUser = await actor.getMyProfile();
      setLoading(false);
      if (
        !loggedUser ||
        (Array.isArray(loggedUser) && loggedUser.length === 0)
      ) {
        setLoading(true);
        loggedUser = await actor.addUser('John Cena', role ?? 'patient');
        setLoading(false);
      }
      setUser((prev) => ({
        ...prev,
        role: loggedUser[0]?.role,
      }));
    }
    setUser((prev) => ({
      ...prev,
      actor,
      authClient,
      isAuthenticated,
      principal,
    }));
  };
  useEffect(() => {
    updateActor();
  }, []);

  const login = async (role: string, provider: string) => {
    switch (provider) {
      case 'II':
        await user?.authClient?.login({
          identityProvider,
          onSuccess: () => updateActor(role),
        });
        break;
      case 'NFID':
        await NFIDLogin();
        updateActor(role);
        break;
      default:
        throw new Error('Unsupported provider');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};
