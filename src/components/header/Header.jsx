import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { Logo } from '../UI/Logo/Logo'
import { SearchInput } from '../UI/SearchInput/SearchInput'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <Link to="/ReactTimer">
          <div className={styles.logo}>
            <Logo />
          </div>
        </Link>
        <div className={styles.navbar}>
          <ul>
            <li>
              <a href="#">Наручные часы</a>{' '}
            </li>
            <li>
              <a href="#">Распродажа</a>{' '}
            </li>
            <li>
              <a href="#">Новости</a>
            </li>
            <li>
              <a href="#">Сервисные центры</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
            <li>
              <a href="#">Доставка</a>
            </li>
          </ul>
        </div>
        <div className={styles.buttons}>
          <ul>
            <li>
              <SearchInput />
            </li>
            <li>
              <Link to="/cart">
                <HiOutlineShoppingBag className={styles.carticon} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export { Header }
