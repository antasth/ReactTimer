import { Provider } from 'react-redux'
import { AppRouter } from './components/AppRouter/AppRouter'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ScrollToTop } from './helpers/ScrollToTop'
import { store } from './redux/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <ScrollToTop />
        <Header />
        <AppRouter />
        <Footer />
      </Provider>
    </>
  )
}

export { App }
