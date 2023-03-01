import { Products } from '../components/Products/Products'
import { SortPanel } from '../components/UI/SortPanel/SortPanel'

const Main = () => {
  return (
    <div>
      <SortPanel />
      <Products />
    </div>
  )
}

export { Main }
