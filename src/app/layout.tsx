import './globals.css'
import './themes.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${process.env.pageTitle}`,
  description: 'The All In One FiveM Server Manager Tool'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="default">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
