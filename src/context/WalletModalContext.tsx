'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

type WalletModalContextType = {
  isModalVisible: boolean;
  setVisible: (visible: boolean) => void;
};

type WalletModalProviderProps = {
  children: ReactNode;
};

// Create the context with proper typing
const WalletModalContext = createContext<WalletModalContextType | null>(null);

// Create the provider
export const WalletModalProvider = ({ children }: WalletModalProviderProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const setVisible = (visible: boolean) => {
    setIsModalVisible(visible);
  };

  const contextValue = {
    isModalVisible,
    setVisible,
  };

  return (
    <WalletModalContext.Provider value={contextValue}>
      {children}
    </WalletModalContext.Provider>
  );
};

// Create a custom hook for convenience
export const useWalletModal = (): WalletModalContextType => {
  const context = useContext(WalletModalContext);
  if (!context) {
    throw new Error('useWalletModal must be used within a WalletModalProvider');
  }
  return context;
};
