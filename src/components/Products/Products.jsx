import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { SortContext } from '../../context/SortContext'
import { ProductCard } from '../ProductCard'
import { Skeleton } from '../ProductCard/Skeleton'
import { Pagination } from '../UI/Pagination/Pagination'
import styles from './Products.module.scss'

const Products = () => {
  const cart = useContext(CartContext)
  const sort = useContext(SortContext)

  const [watches, setWatches] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [itemsOnPage, setItemsOnPage] = useState(12)
  const [page, setPage] = useState(1)


  const getPageParams =(current, pageSize)=> {
    setItemsOnPage(pageSize)
    setPage(current)
  }
  // fetch filter sort search
  useEffect(() => {
    const filter = sort.filter ? `&filter=${sort.filter}` : ''
    const sortBy = sort.sort.value ? `&sortBy=${sort.sort.value}` : ''
    const search = sort.search ? `&search=${sort.search}` : ''
    const order = sort.sort.value
      ? sort.sort.option === 'low'
        ? `&order=asc`
        : `&order=desc`
      : ''

    const url = new URL(
      `https://63fdd7bacd13ced3d7c00ea3.mockapi.io/watch?${filter}${sortBy}${search}${order}`
    )

    fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        // handle error
      })
      .then((json) => {
        setWatches(json)
      })
      .catch((error) => {
        // handle error
      })
  }, [sort.filter, sort.sort, sort.search])

  // fetch all items on startup
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

  const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />)
  const items = watches.slice(page * itemsOnPage - itemsOnPage, page * itemsOnPage).map((watch) => (
    <li key={watch.id} className={styles.item}>
      <ProductCard {...watch} onAddToCart={() => cart.onAddToCart(watch)} />
    </li>
  ))

  return (
    <div>
      <div className={styles.products}>
        <ul className={styles.grid}>{isLoading ? skeleton : items}</ul>
        <Pagination count={watches.length} getPageParams={getPageParams}/>
      </div>
    </div>
  )
}

export { Products }
