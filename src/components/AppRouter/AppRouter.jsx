import { SimpleFilters } from '../UI/SimpleFilters/SimpleFilters'
import styles from './AppRouter.module.scss'

const AppRouter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>AppRouter</h1>
        <SimpleFilters />

        <div className={styles.products}>products</div>
      </div>
    </div>
  )
}

export { AppRouter }
