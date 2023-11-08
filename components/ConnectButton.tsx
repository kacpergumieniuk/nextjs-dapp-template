import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export const ConnectButton = () => {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();

  const connector = connectors[0];

  const handleConnection = () => {
    isConnected ? disconnect() : connect({ connector });
  };
  return (
    <button
      className='text-2xl px-12 h-[70px] rounded-xl font-bold bg-[#c0b9dd] text-[#80A1D4}'
      onClick={handleConnection}
    >
      {isConnected ? 'Connected' : 'Connect wallet'}
    </button>
  );
};
