import { useContext } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { VscTrash } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import styles from './Cart.module.scss'

const Cart = () => {
  const cart = useContext(CartContext)
  
  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Корзина</h1>
      <div className={styles.cart_content}>
        <div className={styles.cart_clear}>
          <div className={styles.icon}>
            <VscTrash />
          </div>
          <h3>Очистить корзину</h3>
        </div>
        <ul className={styles.items_list}>
          {cart.cartItems.map((item) => (
            <li className={styles.list_item}>
              <img src={item.imageUrl[0]} alt="cart_img" />
              <div className={styles.description}>
                <div className={styles.description_top}>
                  <div className={styles.description_top_left}>
                    <div className={styles.brand}>{item.brand}</div>
                    <div className={styles.model}>{item.model}</div>
                  </div>
                  <div className={styles.description_top_right}>
                    <div className={styles.price}>{item.price} $</div>
                  </div>
                </div>
                <div className={styles.description_bottom}>
                  <div className={styles.description_bottom_left}>
                    <div className={styles.count}>
                      <div className={styles.counter}>
                        <div id="icon">
                          <AiOutlineMinus />
                        </div>
                        <span> 1 </span>
                        <div id="icon">
                          <AiOutlinePlus />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.description_bottom_right} id="icon">
                    <VscTrash />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.total}>
          <span>Итого:</span>
          <span>1 товар</span>
          <span>12345 p</span>
        </div>
        <div className={styles.order}>
          <Link to="/">
            <button className={styles.button_catalog}>На главную</button>
          </Link>
          <button className={styles.button_catalog}>Оформить заказ</button>
        </div>
      </div>
    </div>
  )
}

export { Cart }
