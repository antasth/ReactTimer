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
    <div className={styles.filters}>
      <div className={styles.simple_filters}>
        {filters.map((filter) => (
          <FilterButton>{filter}</FilterButton>
        ))}
      </div>
      <div className={styles.sort}>
        Сортировка{' '}
        <select>
          <option value="popularity">По популярности</option>
          <option value="price">По цене</option>
          <option value="name">По названию</option>
        </select>
      </div>
    </div>
  )
}

export { SimpleFilters }
