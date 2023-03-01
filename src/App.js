import { AppRouter } from './components/AppRouter/AppRouter'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ScrollToTop } from './helpers/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <AppRouter />
      <Footer />
    </>
  )
}

export { App }
