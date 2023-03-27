import axios from 'axios'
import qs from 'qs'
import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { setCurrentPage } from '../../redux/slices/filterSlice'
import { ProductCard } from '../ProductCard'
import { Skeleton } from '../ProductCard/Skeleton'
import { Pagination } from '../UI/Pagination/Pagination'
import styles from './Products.module.scss'

const Products = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { filter, sort, search, currentPage, itemsOnPage } = useSelector(
    (state) => state.filterSlice
  )
  const { onAddToCart } = useContext(CartContext)
  const [watches, setWatches] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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

    axios.get(url).then((res) => {
      setWatches(res.data)
      setIsLoading(false)
    })
  }, [filter, sort, search])

  // onChange filter or search set current page to 1
  useEffect(() => {
    dispatch(setCurrentPage(1))
  }, [filter, search, dispatch])

  //add queryString to address bar
  useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sort.value,
      filter,
      currentPage,
    })
    navigate(`?${queryString}`)
  }, [filter, sort, currentPage])

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
        <Pagination count={watches.length} currentPage={currentPage} />
      </div>
    </div>
  )
}

export { Products }
