import { useDispatch, useSelector } from 'react-redux'
import { setActiveIndex, setFilter } from '../../../redux/slices/filterSlice'
import { filters } from '../../../config'
import { FilterButton } from '../FilterButton/FilterButton'
import styles from './SimpleFilters.module.scss'

const SimpleFilters = () => {
  const activeIndex = useSelector((state) => state.filterSlice.activeIndex)
  const dispatch = useDispatch()

  const onClickFilter = (id) => {
    dispatch(setActiveIndex(id))
    dispatch(setFilter(filters[id]))
  }

  return (
    <div className={styles.simple_filters}>
      <ul className={styles.filters_list}>
        {filters.map((filter, index) => (
          <li key={filter} className={styles.filter}>
            <FilterButton
              key={filter}
              onClick={() => onClickFilter(index)}
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
