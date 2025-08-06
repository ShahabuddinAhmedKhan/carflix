import { Roboto } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import { AppConfig } from "@/config/app.config";
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import ContextProvider from './context/ContextProvider';


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning className={roboto.className}>
      <body>
        <ContextProvider>
          <div className='flex'>
            <div className='fixed top-0 z-1 '><Sidebar></Sidebar></div>
            <div className='w-full'>
              <Navbar></Navbar>
              {children}

            </div>

          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
