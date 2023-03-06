import { Button } from 'antd'
import { slicePrice } from '../../utils/pageFunctions'
import styles from './ProductCard.module.scss'

const ProductCard = ({
  brand,
  model,
  imageUrl,
  price,
  avalible,
  onAddToCart,
}) => {
  return (
    <div className={styles.product_card}>
      <div className={styles.image}>
        <img src={imageUrl[0]} alt="product_img"></img>
      </div>

      <div className={styles.description}>
        <div className={styles.title}>
          <div className={styles.brand}>{brand}</div>
          <div className={styles.model}>{model}</div>
        </div>

        <div className={styles.info}>
          <div className={styles.price}>{slicePrice(price)} $.</div>
          <div className={styles.credit}>
            От {Math.round(price / 18)} $./мес.
          </div>
          <div className={styles.stock}>{avalible}</div>
          <div className={styles.button}>
            <Button
              type="default"
              className={styles.buy_button}
              onClick={onAddToCart}
            >
              {avalible === 'В наличии' ? 'Купить' : 'Заказать'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProductCard }
