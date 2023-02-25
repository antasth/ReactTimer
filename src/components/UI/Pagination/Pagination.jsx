import { Pagination as Pag } from 'antd'
import styles from './Pagination.module.scss'

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <Pag defaultCurrent={1} total={50} className={styles.pag_default} />
      <Pag simple defaultCurrent={1} total={50} className={styles.pag_simple} />
    </div>
  )
}

export { Pagination }
