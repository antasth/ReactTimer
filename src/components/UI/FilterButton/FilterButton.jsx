import { Button } from 'antd'
import styles from './FilterButton.module.scss'

const FilterButton = ({ children }) => {
  return (
    <Button type="default" shape="round" className={styles.filter_button}>
      {children}
    </Button>
  )
}

export { FilterButton }
