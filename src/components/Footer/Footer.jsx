import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialVkontakte,
} from 'react-icons/sl'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.menu_links}>
          <div className={styles.links_group}>
            <h3 className={styles.title}>Компания</h3>
            <ul className={styles.submenu}>
              <li>
                <a href="#">О компании</a>
              </li>
              <li>
                <a href="#">Новости</a>
              </li>
              <li>
                <a href="#">Наши магазины</a>
              </li>
              <li>
                <a href="#">Вакансии</a>
              </li>
              <li>
                <a href="#">Политика конфиденциальности</a>
              </li>
              <li>
                <a href="#">Персональные данные</a>
              </li>
              <li>
                <a href="#">Правила пользования сайтом</a>
              </li>
              <li>
                <a href="#">Правила продаж</a>
              </li>
              <li>
                <a href="#">Сервисные центры</a>
              </li>
            </ul>
          </div>
          <div className={styles.links_group}>
            <h3 className={styles.title}>Покупателям</h3>
            <ul className={styles.submenu}>
              <li>
                <a href="#">Как оформить заказ</a>
              </li>
              <li>
                <a href="#">Оплата</a>
              </li>
              <li>
                <a href="#">Доставка</a>
              </li>
              <li>
                <a href="#">Распродажа</a>
              </li>
              <li>
                <a href="#">Подарочный сертификат</a>
              </li>
              <li>
                <a href="#">Карта клиента</a>
              </li>
              <li>
                <a href="#">Корпоративным клиентам</a>
              </li>
              <li>
                <a href="#">Обмен, возврат, гарантия</a>
              </li>
              <li>
                <a href="#">Статус заказа</a>
              </li>
            </ul>
          </div>
          <div className={styles.links_group}>
            <h3 className={styles.title}>Бренды</h3>
            <ul className={styles.submenu}>
              <li>
                <a href="#">Swatch</a>
              </li>
              <li>
                <a href="#">Victorinox</a>
              </li>
              <li>
                <a href="#">Boucheron</a>
              </li>
              <li>
                <a href="#">Chronoswiss</a>
              </li>
              <li>
                <a href="#">De Grisogono</a>
              </li>
              <li>
                <a href="#">Maurice Lacroix</a>
              </li>
              <li>
                <a href="#">Ralph Lauren</a>
              </li>
              <li>
                <a href="#">Universal Genève</a>
              </li>
              <li>
                <a href="#">Yes Watch</a>
              </li>
              <li>
                <a href="#">Lacoste</a>
              </li>
              <li>
                <a href="#">Kronsegler</a>
              </li>
              <li>
                <a href="#">Iron Annie</a>
              </li>
              <li>
                <a href="#">Franck Dubarry</a>
              </li>
              <li>
                <a href="#">Fossil</a>
              </li>
              <li>
                <a href="#">Carlo Ferrara</a>
              </li>
              <li>
                <a href="#">Alfred Dunhill</a>
              </li>
              <li>
                <a href="#">Eichmüller</a>
              </li>
              <li>
                <a href="#">Chris Benz</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.menu_contacts}>
          <h3 className={styles.title}>Контакты</h3>
          <p>8-800-333-77-33</p>
          <p>Адреса магазинов в г. Москва </p>
          <div className={styles.subscription}>
            <p>Подпишись, чтобы не пропустить наши новинки и акции </p>
            <form>
              <input
                className={styles.subscribe_input}
                type="email"
                placeholder="Введите Email"
              ></input>
            </form>
            <div className={styles.policy}>
              Подписываясь на рассылку, Вы соглашаетесь c условиями
              <a href="#"> политики конфиденциальности </a> и{' '}
              <a href="#">политики обработки персональных данных</a>
            </div>
          </div>

          <div className={styles.buttons}>
            <ul>
              <li>
                <SlSocialVkontakte id="icon" />
              </li>
              <li>
                <SlSocialInstagram id="icon" />
              </li>
              <li>
                <SlSocialFacebook id="icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Footer }
