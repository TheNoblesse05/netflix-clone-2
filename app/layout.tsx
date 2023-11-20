import type { Metadata } from 'next'
import './globals.css'
import GlobalState from './context/store'

export const metadata: Metadata = {
  title: 'Netflix Clone',
  description: 'Creating a Netflix clone using Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GlobalState>{children}</GlobalState>
        </body>
    </html>
  )
}
