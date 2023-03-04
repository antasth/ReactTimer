import { AppRouter } from './components/AppRouter/AppRouter'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { CartContextProvider } from './context/CartContext'
import { SortContextProvider } from './context/SortContext'
import { ScrollToTop } from './helpers/ScrollToTop'

function App() {
  return (
    <>
      <SortContextProvider>
        <CartContextProvider>
          <ScrollToTop />
          <Header />
          <AppRouter />
          <Footer />
        </CartContextProvider>
      </SortContextProvider>
    </>
  )
}

export { App }
