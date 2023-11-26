import { Encode_Sans } from 'next/font/google'
import './globals.css'

// Components
import Navbar from './Components/Navbar'

const encodesans = Encode_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Quantum Logic, inc.',
  description: `Solving Humanity's Problem.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={encodesans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
