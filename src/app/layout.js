import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

// export const img = `/images/background.jpg`;
export const img = `https://raw.githubusercontent.com/strawhat19/Next-Portfolio/refs/heads/main/public/images/background.jpg`;

export const metadata = {
  title: `Rakib Ahmed // Official Portfolio`,
  description: `Developer // Designer Portfolio`,
  icons: {
    icon: [
      { url: `https://piratechs.com/wp-content/uploads/2020/01/cropped-Piratech-Icon-Transparent-Skull-Huge-192x192.png`, sizes: `192x192`, type: `image/png` },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
