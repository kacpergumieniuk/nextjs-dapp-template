import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { WagmiConfig, configureChains, createConfig, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

export default function App({ Component, pageProps }: AppProps) {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [publicProvider()]
  );
  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient
  });
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
