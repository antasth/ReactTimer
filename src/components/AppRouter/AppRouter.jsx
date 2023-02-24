import { ProductCard } from '../ProductCard/ProductCard'
import { SortPanel } from '../UI/SortPanel/SortPanel'
import styles from './AppRouter.module.scss'

const AppRouter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <SortPanel />
        <div className={styles.products}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export { AppRouter }
