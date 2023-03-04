import { useContext, useEffect, useState } from 'react'
import { filters } from '../../../config'
import { SortContext } from '../../../context/SortContext'
import { FilterButton } from '../FilterButton/FilterButton'
import styles from './SimpleFilters.module.scss'

const SimpleFilters = () => {
  const [activeIndex, setIsActiveIndex] = useState(0)
  const sort = useContext(SortContext)


  useEffect(() => {
    console.log(filters[activeIndex])
    const url = new URL(`https://63fdd7bacd13ced3d7c00ea3.mockapi.io/watch?type=${filters[activeIndex]}`)

    fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          // console.log(res)
          return res.json()
        }
        // handle error
      })
      .then((tasks) => {
        console.log(tasks)
        // mockapi returns only tasks that match `hello` string
      })
      .catch((error) => {
        // handle error
      })
  }, [activeIndex])

  return (
    <div className={styles.simple_filters}>
      <ul className={styles.filters_list}>
        {filters.map((filter, index) => (
          <li key={filter} className={styles.filter}>
            <FilterButton
              key={filter}
              // onClick={() => setIsActiveIndex(index)}
              onClick={() => sort.setFilterParam(filters[index])}
              className={
                activeIndex === index ? 'button_active' : 'button_default'
              }
            >
              {filter}
            </FilterButton>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { SimpleFilters }
