import { useState } from 'react'
import { filters } from '../../../config'
import { FilterButton } from '../FilterButton/FilterButton'
import styles from './SimpleFilters.module.scss'

const SimpleFilters = () => {
  const [activeIndex, setIsActiveIndex] = useState(0)

  return (
    <div className={styles.simple_filters}>
      <ul className={styles.filters_list}>
        {filters.map((filter, index) => (
          <li key={filter} className={styles.filter}>
            <FilterButton
              key={filter}
              onClick={() => setIsActiveIndex(index)}
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

