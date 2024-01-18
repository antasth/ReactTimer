import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { VscTrash } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { slicePrice } from '../../utils/pageFunctions'
import styles from './Cart.module.scss'
import { removeFromCart, clearCart } from '../../redux/slices/cartSlice'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const clearCartHandler = () => {
    dispatch(clearCart())
  }

  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Корзина</h1>
      <div className={styles.cart_content}>
        <div className={styles.cart_clear}>
          {cartItems.length > 0 && (
            <div className={styles.clear_button} onClick={clearCartHandler}>
              <div className={styles.icon}>
                <VscTrash />
              </div>
              <h3>Очистить корзину</h3>
            </div>
          )}
        </div>
        {!cartItems.length && (
          <div className={styles.empty_cart}>
            <img
              className={styles.empty_watch}
              src="https://i.pinimg.com/564x/6b/56/24/6b5624d17f34b163c67fbcd756869f8b.jpg"
              alt="empty_watch"
            />
            <div className={styles.empty_text}>
              <h1 className={styles.title}>Корзина пуста</h1>
              <p>
                Посмотрите предложения на главной странице, воспользуйтесь
                каталогом или поиском
              </p>
            </div>
          </div>
        )}
        {cartItems.length > 0 && (
          <>
            <ul className={styles.items_list}>
              {cartItems.map((item) => (
                <li className={styles.list_item} key={item.id}>
                  <img src={item.imageUrl[0]} alt="cart_img" />
                  <div className={styles.description}>
                    <div className={styles.description_top}>
                      <div className={styles.description_top_left}>
                        <div className={styles.brand}>{item.brand}</div>
                        <div className={styles.model}>{item.model}</div>
                      </div>
                      <div className={styles.description_top_right}>
                        <div className={styles.price}>
                          {slicePrice(item.price)} $
                        </div>
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
                      <div
                        className={styles.description_bottom_right}
                        id="icon"
                        onClick={() => removeFromCartHandler(item.id)}
                      >
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
              <Link to="/ReactTimer">
                <button className={styles.button_catalog}>На главную</button>
              </Link>
              <button className={styles.button_catalog}>Оформить заказ</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export { Cart }
