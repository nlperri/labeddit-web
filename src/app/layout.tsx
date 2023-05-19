import { Header } from '@/components/Header'
import './globals.css'
import {
  IBM_Plex_Sans as IBMPlexSans,
  Noto_Sans as NotoSans
} from 'next/font/google'




const plexSans = IBMPlexSans({ subsets: ['latin'], variable: '--font-plexSans', weight: ['300', '700'] })

const notoSans = NotoSans({ subsets: ['latin'], weight: '300', variable: '--font-notoSans' })

export const metadata = {
  title: 'LabEddit',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={`${plexSans.variable} ${notoSans.variable} font-sans text-black min-h-screen`} >
        <main className="">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
