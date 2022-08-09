import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: {
  session,
  ...pageProps
} }: AppProps) {
  // at the line 9, we can pass to the session provider a session props object if we destruct the pageProps
  // pageProps: { session, ...pageProps }
  return (
    <SessionProvider session={session}> 
      <Header /> 
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
