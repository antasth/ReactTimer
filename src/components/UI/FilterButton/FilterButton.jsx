import { Button } from 'antd'
import styles from './FilterButton.module.scss'

const FilterButton = ({ isActive, onClick, children }) => {
  return (
    <Button
      type="default"
      shape="round"
      className={`${styles.button} ${
        isActive ? styles.button__active : styles.button__default
      }`}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export { FilterButton }
