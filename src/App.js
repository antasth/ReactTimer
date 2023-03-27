import { AppRouter } from './components/AppRouter/AppRouter'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { CartContextProvider } from './context/CartContext'
import { ScrollToTop } from './helpers/ScrollToTop'

function App() {
  return (
    <>
      <CartContextProvider>
        <ScrollToTop />
        <Header />
        <AppRouter />
        <Footer />
      </CartContextProvider>
    </>
  )
}

export { App }
