import data from '../../data/db.json'
import { ProductCard } from '../ProductCard/ProductCard'
import { Pagination } from '../UI/Pagination/Pagination'
import styles from './Products.module.scss'

const Products = () => {
  console.log(data.watches)
  return (
    <div>
      <div className={styles.products}>
        <ul className={styles.grid}>
          {data.watches.map((item) => (
            <li key={item.id} className={styles.item}>
              <ProductCard {...item} />
            </li>
          ))}
        </ul>
        <Pagination />
      </div>
    </div>
  )
}

export { Products }
