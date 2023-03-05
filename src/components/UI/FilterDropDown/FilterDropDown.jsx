import { Dropdown } from 'antd'
import { useContext } from 'react'
import { filters } from '../../../config'
import { SortContext } from '../../../context/SortContext'
import styles from './FilterDropDown.module.scss'

const FilterDropDown = () => {
  const sort = useContext(SortContext)

  const handleMenuClick = (e) => {
    sort.setFilterParams(filters[e.key])
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
