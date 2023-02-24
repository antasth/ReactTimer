import { ProductCard } from '../ProductCard/ProductCard'
import { SortPanel } from '../UI/SortPanel/SortPanel'
import styles from './AppRouter.module.scss'

const AppRouter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <SortPanel />
        <div className={styles.products}>
          <ul className={styles.grid}>
            <li className={styles.item}>
            <ProductCard />
            </li>
            <li className={styles.item}>
            <ProductCard />
            </li>
            <li className={styles.item}>
            <ProductCard />
            </li>
            <li className={styles.item}>
            <ProductCard />
            </li>
            <li className={styles.item}>
            <ProductCard />
            </li>
            <li className={styles.item}>
            <ProductCard />
            </li>
            <li className={styles.item}>
            <ProductCard />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export { AppRouter }
