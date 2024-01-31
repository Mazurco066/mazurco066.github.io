// Dependencies
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

// Styles
import '../globals.scss'

// Fonts and page metadata
export const metadata: Metadata = {
  title: "Home | Gabriel Mazurco",
  description: "Welcome to Gabriel Mazurco's web page.",
}
const montserrat = Montserrat({ subsets: ['latin'] })

// Layout props
type IRootLayout = {
  children: React.ReactNode
}

// Main layout
export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt" className={montserrat.className}>
      <body >
        {children}
      </body>
    </html>
  )
}
