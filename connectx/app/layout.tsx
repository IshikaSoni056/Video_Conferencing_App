import type { Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import "@stream-io/video-react-sdk/dist/css/styles.css";
import 'react-datepicker/dist/react-datepicker.css'
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ConnectX',
  description: 'Video calling app',
  icons: {
    icon: '/icons/logo.svg'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider 
appearance={{
      variables:{
        colorText: '#fff',
        colorPrimary: '#0E78F9',
        colorBackground : '#1c1f2e',
        colorInputBackground: '#252a41',
        colorInputText:'#fff',
      },
      elements: {
        // social button text
        socialButtonsBlockButtonText: {
          color: 'white'
        },
      },
    }}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-2` }>
          {children}
          <Toaster/>
        </body>
      </html>
    </ClerkProvider>
  )
}