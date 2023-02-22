import { HiOutlineSearch, HiOutlineShoppingBag } from 'react-icons/hi'
import { Logo } from '../UI/Logo/Logo'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.logo}>
          <Logo />
        </div>
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
              <HiOutlineSearch id="icon" />
            </li>
            <li>
              <HiOutlineShoppingBag id="icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export { Footer }
