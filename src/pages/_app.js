import { globalStyles } from '../styles/global'
import { Roboto } from '@next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartContextProvider } from '../contexts/CartContext'

globalStyles()

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <main className={roboto.className}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </CartContextProvider>
  )
}

export default MyApp
