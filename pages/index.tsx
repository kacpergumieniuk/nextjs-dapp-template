import { ConnectButton } from '@/components/ConnectButton';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={` ${inter.className} h-screen w-screen bg-[#ded9e2] flex items-center justify-center`}
    >
      <ConnectButton />
    </main>
  );
}
