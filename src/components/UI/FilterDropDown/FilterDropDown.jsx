import { Dropdown } from 'antd'
import { useDispatch } from 'react-redux'
import { filters } from '../../../config'
import { setActiveIndex, setFilter } from '../../../redux/slices/filterSlice'
import styles from './FilterDropDown.module.scss'

const FilterDropDown = () => {
  const dispatch = useDispatch()

  const handleMenuClick = (e) => {
    dispatch(setActiveIndex(e.key))
    dispatch(setFilter(filters[e.key]))
  }

  const items = filters.map((filter, index) => {
    return { label: filter, key: index }
  })

  const menuProps = {
    items,
    onClick: handleMenuClick,
  }
  return (
    <Dropdown.Button
      menu={menuProps}
      placement={'bottomRight'}
      className={styles.dropdown}
    >
      Фильтры
    </Dropdown.Button>
  )
}

export { FilterDropDown }
