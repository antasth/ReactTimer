import axios from 'axios'
import qs from 'qs'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { setCurrentPage, setFiterParams } from '../../redux/slices/filterSlice'
import { ProductCard } from '../ProductCard'
import { Skeleton } from '../ProductCard/Skeleton'
import { Pagination } from '../UI/Pagination/Pagination'
import styles from './Products.module.scss'
import { addToCart } from '../../redux/slices/cartSlice'

const Products = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { filter, sort, search, currentPage, itemsOnPage } = useSelector(
    (state) => state.filters
  )

  const addToCartHandler = (watch) => {
    dispatch(addToCart(watch))
  }
  const [watches, setWatches] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      dispatch(
        setFiterParams({
          ...params,
        })
      )
    }
  }, [])

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

  useEffect(() => {
    dispatch(setCurrentPage(1))
  }, [filter, search, dispatch])

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
        <ProductCard {...watch} onAddToCart={() => addToCartHandler(watch)} />
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
