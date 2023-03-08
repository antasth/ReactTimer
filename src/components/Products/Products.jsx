import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CartContext } from '../../context/CartContext'
import { SortContext } from '../../context/SortContext'
import { ProductCard } from '../ProductCard'
import { Skeleton } from '../ProductCard/Skeleton'
import { Pagination } from '../UI/Pagination/Pagination'
import styles from './Products.module.scss'

const Products = () => {
  const filter = useSelector((state) => state.filterSlice.filter)

  const { onAddToCart } = useContext(CartContext)
  const { sort, search } = useContext(SortContext)

  const [watches, setWatches] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [itemsOnPage, setItemsOnPage] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)

  const getPageParams = (current, pageSize) => {
    setItemsOnPage(pageSize)
    setCurrentPage(current)
  }
  // fetch filter sort search
  useEffect(() => {
    const filterBy = filter ? `&filter=${filter}` : ''
    const sortBy = sort.value ? `&sortBy=${sort.value}` : ''
    const searchBy = search ? `&search=${search}` : ''
    const order = sort.value
      ? sort.option === 'low'
        ? `&order=asc`
        : `&order=desc`
      : ''

    const url = new URL(
      `https://63fdd7bacd13ced3d7c00ea3.mockapi.io/watch?${filterBy}${sortBy}${searchBy}${order}`
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
  }, [filter, sort, search])

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

  // onChange filter or search set current page to 1
  useEffect(() => {
    setCurrentPage(1)
  }, [filter, search])

  const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />)
  const items = watches
    .slice(currentPage * itemsOnPage - itemsOnPage, currentPage * itemsOnPage)
    .map((watch) => (
      <li key={watch.id} className={styles.item}>
        <ProductCard {...watch} onAddToCart={() => onAddToCart(watch)} />
      </li>
    ))

  return (
    <div>
      <div className={styles.products}>
        <ul className={styles.grid}>{isLoading ? skeleton : items}</ul>
        <Pagination
          count={watches.length}
          getPageParams={getPageParams}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}

export { Products }
