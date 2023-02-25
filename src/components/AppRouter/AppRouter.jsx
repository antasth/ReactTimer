import { Products } from '../Products/Products'
import { SortPanel } from '../UI/SortPanel/SortPanel'
import styles from './AppRouter.module.scss'

const AppRouter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <SortPanel />
        <Products />
      </div>
    </div>
  )
}

export { AppRouter }
