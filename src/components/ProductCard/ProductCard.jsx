import { Button } from 'antd'
import styles from './ProductCard.module.scss'

const ProductCard = () => {
  return (
    <div className={styles.product_card}>
      <div className={styles.image}>
        <img
          src={'https://i.pinimg.com/564x/7e/e7/02/7ee702fa36ed09c8059f6da1533b53d1.jpg'}
          alt="product_img"
        ></img>
      </div>
      <div className={styles.description}>
        <div className={styles.title}>
          <div className={styles.brand}>Longines</div>
          <div className={styles.model}>Conquest Classic</div>
        </div>
        <div className={styles.price}>20 812,00 ₽.</div>
        <div className={styles.credit}>От 1 040,60 ₽./мес.</div>
        <div className={styles.stock}>В наличии</div>
        <div className={styles.button}>
          <Button type="default" className={styles.buy_button}>
            Купить
          </Button>
        </div>
      </div>
    </div>
  )
}

export { ProductCard }

