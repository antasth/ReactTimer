import { FaSearch } from 'react-icons/fa'
import styles from './Search.module.scss'

const Search = () => {
  return (
    <div className={styles.search_box}>
      <button className={styles.btn_search}>
        <FaSearch className={styles.icon}/>
      </button>
      <input
        type="text"
        className={styles.input_search}
        placeholder="Поиск по каталогу..."
      />
    </div>
  )
}

export { Search }
