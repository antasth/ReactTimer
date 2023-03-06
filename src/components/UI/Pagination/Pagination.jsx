import { Pagination as Pag } from 'antd'
import styles from './Pagination.module.scss'

const Pagination = ({ count, getPageParams }) => {
  const onChange = (current, pageSize) => {
    getPageParams(current, pageSize)
  }

  return (
    <div className={styles.pagination}>
      <Pag
        className={styles.pag_default}
        defaultCurrent={1}
        total={count}
        onChange={onChange}
        pageSizeOptions={[12, 24, 36]}
        defaultPageSize={12}
      />
      <Pag
        simple
        defaultCurrent={1}
        total={count}
        className={styles.pag_simple}
      />
    </div>
  )
}
export { Pagination }
