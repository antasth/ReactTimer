import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { VscTrash } from 'react-icons/vsc'

import styles from './Cart.module.scss'
const Cart = () => {
  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Корзина</h1>
      <div className={styles.cart_content}>
        <ul className={styles.items_list}>
          <li className={styles.list_item}>
            <img
              src="https://i.pinimg.com/564x/c3/94/4b/c3944b90ce5e6922f51ac860d6676a90.jpg"
              alt="cart_img"
            />
            <div className={styles.description}>
              <div className={styles.description_top}>
                <div className={styles.description_top_left}>
                  <div className={styles.brand}>Tissot</div>
                  <div className={styles.model}>T-CLASSIC</div>
                </div>
                <div className={styles.description_top_right}>
                  <div className={styles.price}> 9999 p</div>
                </div>
              </div>
              <div className={styles.description_bottom}>
                <div className={styles.description_bottom_left}>
                  <div className={styles.count}>
                    <span className={styles.count_text}>Количество </span>{' '}
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
          <li className={styles.list_item}>
            <img
              src="https://i.pinimg.com/564x/c3/94/4b/c3944b90ce5e6922f51ac860d6676a90.jpg"
              alt="cart_img"
            />
            <div className={styles.description}>
              <div className={styles.description_top}>
                <div className={styles.description_top_left}>
                  <div className={styles.brand}>Tissot</div>
                  <div className={styles.model}>T-CLASSIC</div>
                </div>
                <div className={styles.description_top_right}>
                  <div className={styles.price}> 9999 p</div>
                </div>
              </div>
              <div className={styles.description_bottom}>
                <div className={styles.description_bottom_left}>
                  <div className={styles.count}>
                    <span className={styles.count_text}>Количество </span>{' '}
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
          <li className={styles.list_item}>
            <img
              src="https://i.pinimg.com/564x/c3/94/4b/c3944b90ce5e6922f51ac860d6676a90.jpg"
              alt="cart_img"
            />
            <div className={styles.description}>
              <div className={styles.description_top}>
                <div className={styles.description_top_left}>
                  <div className={styles.brand}>Tissot</div>
                  <div className={styles.model}>T-CLASSIC</div>
                </div>
                <div className={styles.description_top_right}>
                  <div className={styles.price}> 9999 p</div>
                </div>
              </div>
              <div className={styles.description_bottom}>
                <div className={styles.description_bottom_left}>
                  <div className={styles.count}>
                    <span className={styles.count_text}>Количество </span>{' '}
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
        
        </ul>
        <div className={styles.total}>Итого: 12345 p</div>
      </div>
    </div>
  )
}

export { Cart }
