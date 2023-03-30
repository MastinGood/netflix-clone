import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { AuthProvider } from '../../hooks/useAuth'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>   
  )
}
