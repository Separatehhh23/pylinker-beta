import 's/globals.scss'
import { Inter } from 'next/font/google'
//import NavBar from 'c/NavBar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Pylinker',
  description: 'The beta version of Pylinker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*<NavBar></NavBar>*/}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
