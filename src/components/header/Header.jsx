import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { Logo } from '../UI/Logo/Logo'
import { Search } from '../UI/Search/Search'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <Link to="/">
          <div className={styles.logo}>
            <Logo />
          </div>
        </Link>
        <div className={styles.navbar}>
          <ul>
            <li>Наручные часы</li>
            <li>Распродажа</li>
            <li>Новости</li>
            <li>Сервисные центры</li>
            <li>Контакты</li>
            <li>Доставка</li>
          </ul>
        </div>
        <div className={styles.buttons}>
          <ul>
            <li>
              <Search />
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
