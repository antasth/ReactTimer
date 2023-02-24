import { filters } from '../../../config'
import { FilterButton } from '../FilterButton/FilterButton'
import styles from './SimpleFilters.module.scss'

const SimpleFilters = () => {
  return (
    <>
      <div className={styles.simple_filters}>
        {filters.map((filter) => (
          <div key={filter} className={styles.filter}>
            <FilterButton key={filter}>{filter}</FilterButton>
          </div>
        ))}
      </div>
    </>
  )
}

export { SimpleFilters }
