import { FilterButton } from '../FilterButton/FilterButton'
import styles from './SimpleFilters.module.scss'

const SimpleFilters = () => {
  const filters = [
    'Все',
    'Новинки',
    'Спортивные',
    'Классические',
    'Механика',
    'Сапфировое стекло',
  ]
  return (
    <div className={styles.simple_filters}>
      {filters.map((filter) => (
        <FilterButton>{filter}</FilterButton>
      ))}
    </div>
  )
}

export { SimpleFilters }
