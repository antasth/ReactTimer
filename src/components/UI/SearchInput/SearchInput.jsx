import { useContext } from 'react';
import {FaSearch} from 'react-icons/fa';
import { SortContext } from '../../../context/SortContext';
import styles from './SearchInput.module.scss'

const SearchInput = () => {
  const {search, setSearchParams} = useContext(SortContext)

  return (
    <div className={styles.search_box}>
      <form className={styles.search_form}>
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
          placeholder="Поиск..."
          onChange={(e) => setSearchParams(e.target.value)}
        />
      </form>
    </div>
  )
}

export { SearchInput }
