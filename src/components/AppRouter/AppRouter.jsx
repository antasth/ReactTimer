import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../../routes/routes'
import styles from './AppRouter.module.scss'

const AppRouter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.id}
              element={route.component}
              path={route.path}
              exact={route.exact}
            />
          ))}
        </Routes>
      </div>
    </div>
  )
}

export { AppRouter }
