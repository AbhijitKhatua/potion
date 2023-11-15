import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import  ThemeProvider  from '@/components/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Potion',
  description: 'Brew your own stuff',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/light-logo.svg",
        href: "/light-logo.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/dark-logo.svg",
        href: "/dark-logo.svg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jotion-key"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
