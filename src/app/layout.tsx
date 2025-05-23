import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Superwin - Win Big Every Day',
  description: 'Experience the thrill of winning with Superwin, your premier gaming destination.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen overflow-x-hidden text-white`}>
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
