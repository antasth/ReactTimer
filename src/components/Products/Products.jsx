import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { ProductCard } from '../ProductCard'
import { Skeleton } from '../ProductCard/Skeleton'
import { Pagination } from '../UI/Pagination/Pagination'
import styles from './Products.module.scss'

const Products = () => {
  const cart = useContext(CartContext)

  const [watches, setWatches] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://63fdd7bacd13ced3d7c00ea3.mockapi.io/watch'
        )
        const json = await res.json()
        setWatches(json)
        setIsLoading(false)
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
          {isLoading
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : watches.map((watch) => (
                <li key={watch.id} className={styles.item}>
                  <ProductCard
                    {...watch}
                    onAddToCart={() => cart.onAddToCart(watch)}
                  />
                </li>
              ))}
        </ul>
        <Pagination count={watches.length} />
      </div>
    </div>
  )
}

export { Products }
