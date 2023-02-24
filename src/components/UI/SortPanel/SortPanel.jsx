import { FilterDropDown } from '../FilterDropDown/FilterDropDown'
import { SimpleFilters } from '../SimpleFilters/SimpleFilters'
import { SortProducts } from '../SortProducts/SortProducts'
import styles from './SortPanel.module.scss'

const SortPanel = () => {
  return (
    <div className={styles.sort_panel}>
      <FilterDropDown/>
      <SimpleFilters />
      <SortProducts />
    </div>
  )
}

export { SortPanel }
