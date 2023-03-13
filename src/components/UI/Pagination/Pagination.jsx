import { Pagination as Pag } from 'antd'
import { scrollToTop } from '../../../utils/pageFunctions'
import styles from './Pagination.module.scss'

const Pagination = ({ count, getPageParams, currentPage }) => {
  const onChange = (current, pageSize) => {
    getPageParams(current, pageSize)
    scrollToTop()
  }

  return (
    <div className={styles.pagination}>
      <Pag
        className={styles.pag_default}
        defaultCurrent={1}
        current={currentPage}
        total={count}
        onChange={onChange}
        pageSizeOptions={[12, 24, 36]}
        defaultPageSize={12}
      />
      <Pag
        simple
        defaultCurrent={1}
        current={currentPage}
        total={count}
        onChange={onChange}
        defaultPageSize={12}
        className={styles.pag_simple}
      />
    </div>
  )
}
export { Pagination }
