'use client';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { WalletProviders } from './providers';
import { useWallet } from '@solana/wallet-adapter-react';
import { useConnection } from '@solana/wallet-adapter-react';
import { useState, useEffect } from 'react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

const App = () => {
  const { publicKey, connected } = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    if (publicKey) {
      connection.getBalance(publicKey).then(balance => {
        setBalance(balance / LAMPORTS_PER_SOL);
      });
    }
  }, [publicKey, connection]);

  return (
    <WalletProviders>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        {/* Navbar */}
        <nav className="p-6 flex justify-between items-center">
          <div className="text-2xl font-bold">Solana Name Service</div>
          <div className="flex items-center space-x-4">
            {connected && balance !== null && (
              <span className="bg-purple-800 px-4 py-2 rounded">
                {balance.toFixed(2)} SOL
              </span>
            )}
            <WalletMultiButton className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" />
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold mb-4">Decentralized Names for Solana</h1>
          <p className="text-xl mb-8">Register, manage, and trade unique names on the Solana blockchain.</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded">
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Name Registration</h3>
                <p>Register unique names on the Solana blockchain.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Metadata Support</h3>
                <p>Attach metadata like descriptions and links to your names.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Auction System</h3>
                <p>Buy and sell premium names through auctions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">1. Connect Wallet</h3>
                <p>Connect your Solana wallet to get started.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">2. Register a Name</h3>
                <p>Choose a unique name and register it on-chain.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">3. Manage Your Names</h3>
                <p>Update, transfer, or delete your names anytime.</p>
              </div>
            </div>
          </div>
        </section>
  );


export default App;
        <footer className="bg-gray-900 py-10">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2023 Solana Name Service. All rights reserved.</p>
            <div className="mt-4">
              <a href="#" className="mx-2 hover:text-purple-400">Docs</a>
              <a href="#" className="mx-2 hover:text-purple-400">Twitter</a>
              <a href="#" className="mx-2 hover:text-purple-400">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </WalletProviders>
  );
}

export default App;
