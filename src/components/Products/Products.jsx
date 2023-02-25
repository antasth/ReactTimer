import { Pagination } from '../UI/Pagination/Pagination'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './Products.module.scss'

const Products = () => {
  return (
    <div>
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
        <Pagination />
      </div>
    </div>
  )
}

export { Products }
