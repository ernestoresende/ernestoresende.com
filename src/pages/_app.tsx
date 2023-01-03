import '@/styles/global.css'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { Inter, Nunito } from '@next/font/google'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={clsx(inter.variable, nunito.variable)}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  )
}

export default App
