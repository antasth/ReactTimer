import ContentLoader from 'react-content-loader'
import styles from './ProductCard.module.scss'

const Skeleton = () => (
  <ContentLoader
    className={styles.product_card}
    speed={2}
    width={330}
    height={555}
    viewBox="0 0 330 555"
    backgroundColor="#ededed"
    foregroundColor="#d6d6d6"
  >
    <rect x="90" y="347" rx="6" ry="6" width="150" height="8" />
    <rect x="100" y="490" rx="0" ry="0" width="132" height="45" />
    <rect x="75" y="0" rx="15" ry="15" width="180" height="285" />
    <rect x="111" y="317" rx="6" ry="6" width="100" height="15" />
    <rect x="94" y="387" rx="5" ry="5" width="141" height="35" />
    <rect x="133" y="435" rx="0" ry="0" width="60" height="6" />
    <rect x="110" y="463" rx="0" ry="0" width="108" height="6" />
  </ContentLoader>
)

export { Skeleton }
