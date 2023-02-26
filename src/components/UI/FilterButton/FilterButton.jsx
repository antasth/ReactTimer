import { Button } from 'antd'
import styles from './FilterButton.module.scss'

const FilterButton = ({ onClick, children, className }) => {
  return (
    <Button
      type="default"
      shape="round"
      className={`${styles.button} ${styles[className]}`}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export { FilterButton }
