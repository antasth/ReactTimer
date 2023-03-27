import { Pagination as Pag } from 'antd'
import { scrollToTop } from '../../../utils/pageFunctions'
import { setCurrentPage } from '../../../redux/slices/filterSlice'
import styles from './Pagination.module.scss'
import { useDispatch } from 'react-redux'

const Pagination = ({ count, getPageParams, currentPage }) => {
  const dispatch = useDispatch()
  const onChange = (current, pageSize) => {
    dispatch(setCurrentPage(current))
    getPageParams(pageSize)
    // scrollToTop()
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

