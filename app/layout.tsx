
import NavbarHead from '@/components/Navbar/NavbarHead'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Authprovider from '@/components/Authprovider/Authprovider'
import FooterU from '@/components/Footer/FooterU'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gift Shop',
  description: 'Your all in one gifts destination',
  keywords: 'Affordable Shipping, Fast Delivery, Door-to-Door Shipping, Reliable Shipping Partner,Shipping Solutions and Secure Handling'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Authprovider>
          <NavbarHead />
          {children}
          <FooterU/>
        </Authprovider>
      </body>

    </html>
  )
}
