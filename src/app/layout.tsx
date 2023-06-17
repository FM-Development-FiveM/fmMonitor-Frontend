import './globals.css'
import './themes.css'

import { Metadata } from 'next'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  preload: true
})

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
      <body className={"fmMonitorBody " + quicksand.variable}>{children}</body>
    </html>
  )
}
