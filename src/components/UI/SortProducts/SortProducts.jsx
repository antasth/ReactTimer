import styles from './SortProducts.module.scss'

const SortProducts = () => {
  return (
    <div className={styles.sort}>
      Сортировка{' '}
      <select>
        <option value="popularity">По популярности</option>
        <option value="price">По цене</option>
        <option value="name">По названию</option>
      </select>
    </div>
  )
}

export { SortProducts }
