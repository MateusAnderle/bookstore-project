import { globalStyles } from '../styles/global'
import { Roboto } from '@next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

globalStyles()

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default MyApp
