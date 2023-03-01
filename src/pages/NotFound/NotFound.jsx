import { Button } from 'antd'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.not_found}>
          <span>4</span>
          <img
            src="https://i.pinimg.com/564x/9d/a6/f7/9da6f7effcfe3bb593a65941cd400587.jpg"
            alt="not-found"
          ></img>
          <span>4</span>
        </div>
        <h1 className={styles.title}>Страница не найдена!</h1>
        <p>К сожалению, запрашиваемой страницы не существует.</p>
        <p>
          Вы можете воспользоваться формой поиска по каталогу, или перейти в
          каталог товаров
        </p>
        <Link to="/">
          <Button className={styles.button}>Перейти в каталог</Button>
        </Link>
      </div>
    </div>
  )
}

export { NotFound }
