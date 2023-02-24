import { FilterButton } from '../FilterButton/FilterButton'
import styles from './SimpleFilters.module.scss'

const SimpleFilters = () => {
  const filters = [
    'Все',
    'Новинки',
    'Спортивные',
    'Классические',
    'Механика',
    'Водостойкие',
  ]
  return (
    <>
      <div className={styles.simple_filters}>
        {filters.map((filter) => (
          <div className={styles.filter}>

            <FilterButton key={filter}>{filter}</FilterButton>
          </div>
        ))}
      </div>
    </>
  )
}

export { SimpleFilters }
