import { useEffect, useState } from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import { Pagination } from '../UI/Pagination/Pagination'
import styles from './Products.module.scss'

const Products = () => {
  const [watches, setWatches] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://63fdd7bacd13ced3d7c00ea3.mockapi.io/watch'
        )
        const json = await res.json()
        console.log(json)
        setWatches(json)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className={styles.products}>
        <ul className={styles.grid}>
          {watches.map((watch) => (
            <li key={watch.id} className={styles.item}>
              <ProductCard {...watch} />
            </li>
          ))}
        </ul>
        <Pagination />
      </div>
    </div>
  )
}

export { Products }
