'use client'

import { Open_Sans as OpenSans } from 'next/font/google'

import { SessionProvider } from 'next-auth/react'

import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'

import './globals.css'
import { Toaster } from 'react-hot-toast'
import { DashboardProvider } from '@/context/DashboardProvider'

const openSans = OpenSans({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  style: 'normal'
})

export default function RootLayout ({ children }) {
  return (
    <html lang='en' className={`${openSans.className} antialiased overflow-x-hidden`}>
      <body>
        <Toaster
          position='top-center'
          reverseOrder
          gutter={8}
          toastOptions={{
            duration: 3000
          }}
        />
        <SessionProvider>
          <DashboardProvider>
            <main>
              <Navbar />
              {children}
              <Footer />
            </main>
          </DashboardProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
