import { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { SortContext } from '../../../context/SortContext'
import styles from './Search.module.scss'

const Search = () => {
  const {search, setSearchParams} = useContext(SortContext)

  return (
    <div className={styles.search_box}>
      <form>
        <button
          className={styles.btn_search}
          onClick={(e) => e.preventDefault()}
        >
          <FaSearch className={styles.icon} />
        </button>
        <input
          type="text"
          className={styles.input_search}
          value={search}
          placeholder="Поиск по каталогу..."
          onChange={(e) => setSearchParams(e.target.value)}
        />
      </form>
    </div>
  )
}

export { Search }

