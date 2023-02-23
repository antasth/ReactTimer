import { SortPanel } from '../UI/SortPanel/SortPanel'
import styles from './AppRouter.module.scss'

const AppRouter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>AppRouter</h1>

        <SortPanel />

        <div className={styles.products}>products</div>
      </div>
    </div>
  )
}

export { AppRouter }
