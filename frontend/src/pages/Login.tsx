import React, { useEffect, useState } from 'react';
import nfidLogo from '../assets/img/nfid.png';
import { AuthClient } from '@dfinity/auth-client';
import { canisterId, createActor } from '../../../src/declarations/backend';
import {
  CreateActor,
  HelloIDL,
  IdentityLogin,
  NFIDLogin,
  PlugLogin,
  StoicLogin,
  Types,
} from 'ic-auth';

// Logo SVG Components (Tambahkan di file terpisah)
const InternetIdentityLogo = () => (
  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
  </svg>
);

const PlugLogo = () => (
  <svg className="w-6 h-6 mr-3" viewBox="0 0 32 32">
    <path
      d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0z"
      fill="#4A90E2"
    />
    <path d="M14 10h4v12h-4z" fill="#FFF" />
    <path d="M22 10h4v12h-4z" fill="#FFF" />
  </svg>
);

const StoicLogo = () => (
  <svg className="w-6 h-6 mr-3" viewBox="0 0 32 32">
    <path
      d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0z"
      fill="#FF6B35"
    />
    <path d="M18 10l6 10-6 10H8l6-10-6-10z" fill="#FFF" />
  </svg>
);

const network = import.meta.env.VITE_DFX_NETWORK;
const identityProvider =
  network === 'ic'
    ? 'https://identity.ic0.app'
    : `http://a3shf-5eaaa-aaaaa-qaafa-cai.localhost:4943/`;

const whitelist = ['a3shf-5eaaa-aaaaa-qaafa-cai'];

export default function Login() {
  const [state, setState] = useState<{
    actor: ReturnType<typeof createActor> | undefined;
    authClient: AuthClient | undefined;
    isAuthenticated: boolean | undefined;
    principal: string | undefined;
  }>({
    actor: undefined,
    authClient: undefined,
    isAuthenticated: undefined,
    principal: 'Click "Refresh" to see your Principal ID',
  });

  // Update actor state
  const updateActor = async () => {
    const authClient = await AuthClient.create();
    const identity = authClient.getIdentity();
    const actor = createActor(canisterId, {
      agentOptions: { identity },
    });
    const isAuthenticated = await authClient.isAuthenticated();

    setState((prev) => ({
      ...prev,
      actor,
      authClient,
      isAuthenticated,
    }));
  };

  useEffect(() => {
    updateActor();
  }, []);

  // Handle logout
  const logout = async () => {
    await state?.authClient?.logout();
    await updateActor();
  };

  // Handle whoami call
  const whoami = async () => {
    setState((prev) => ({ ...prev, principal: 'Loading...' }));
    const result = await state?.actor?.whoami();
    setState((prev) => ({ ...prev, principal: result?.toString() }));
  };

  // Unified login handler
  const handleLogin = async (provider: string) => {
    try {
      let userObject: Types.UserObject = {
        principal: 'Not Connected.',
        agent: undefined,
        provider: 'N/A',
      };

      switch (provider) {
        case 'Plug':
          userObject = await PlugLogin(whitelist);
          break;
        case 'Stoic':
          userObject = await StoicLogin();
          break;
        case 'NFID':
          userObject = await NFIDLogin();
          break;
        case 'Identity':
          userObject = await IdentityLogin();
          break;
        default:
          throw new Error('Unsupported provider');
      }

      if (userObject.agent) {
        const actor = await CreateActor(userObject.agent, HelloIDL, canisterId);
        const result = await actor.hello();
        console.log('Login Success:', result);
        await updateActor();
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Welcome To MedDokAi
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Secure Health Platform Powered by Blockchain Technology
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          {/* {state.principal && (
            <div className="mb-8 bg-blue-50 rounded-lg p-4">
              <p className="text-sm font-semibold text-blue-800 mb-2">
                Principal ID:
              </p>
              <div className="flex items-center justify-between">
                <code className="text-xs text-blue-600 break-all">
                  {state.principal}
                </code>
                <button
                  onClick={whoami}
                  className="ml-4 px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg text-sm"
                >
                  Refresh
                </button>
              </div>
            </div>
          )} */}

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              Secure Login Methods
            </h3>

            {/* Internet Identity */}
            <button
              onClick={
                state.isAuthenticated ? logout : () => handleLogin('Identity')
              }
              className="w-full flex items-center justify-center p-4 rounded-xl border border-blue-200 hover:border-blue-400 bg-white hover:bg-blue-50 transition-all"
            >
              <InternetIdentityLogo />
              <span className="font-medium text-gray-700">
                {state.isAuthenticated ? 'Logout from' : 'Login with'} Internet
                Identity
              </span>
            </button>

            {/* Plug Wallet */}
            <button
              onClick={() => handleLogin('Plug')}
              className="w-full flex items-center justify-center p-4 rounded-xl border border-purple-200 hover:border-purple-400 bg-white hover:bg-purple-50 transition-all"
            >
              <PlugLogo />
              <span className="font-medium text-gray-700">
                Login with Plug Wallet
              </span>
            </button>
            {/* Plug Wallet */}
            <button
              onClick={() => handleLogin('NFID')}
              className="w-full flex items-center justify-center p-4 rounded-xl border border-purple-200 hover:border-purple-400 bg-white hover:bg-purple-50 transition-all"
            >
              <img
                className="mr-4 w-8 h-8 aspect-square"
                src={nfidLogo}
                alt=""
              />
              <span className="font-medium text-gray-700">Login with NFID</span>
            </button>

            {/* Stoic Wallet */}
            <button
              onClick={() => handleLogin('Stoic')}
              className="w-full flex items-center justify-center p-4 rounded-xl border border-orange-200 hover:border-orange-400 bg-white hover:bg-orange-50 transition-all"
            >
              <StoicLogo />
              <span className="font-medium text-gray-700">
                Login with Stoic Wallet
              </span>
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              <span className="text-blue-600">HIPAA-compliant Security:</span>
              All data encrypted using AES-256 and stored decentralized
            </p>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>© 2024 MedDokAi. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
