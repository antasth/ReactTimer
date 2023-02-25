import { Button } from 'antd'
import styles from './ProductCard.module.scss'

const ProductCard = () => {
  return (
    <div className={styles.product_card}>
      <div className={styles.image}>
        <img
          src={require('../../assets/img/products/Longines_Conquest_Classic.png')}
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
