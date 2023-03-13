import { useContext } from 'react';
import { CgSearch } from 'react-icons/cg';
import { VscClose } from 'react-icons/vsc';
import { SortContext } from '../../../context/SortContext';
import styles from './SearchInput.module.scss';

const SearchInput = () => {
  const {search, setSearchParams} = useContext(SortContext)

  return (
    <div className={styles.search_box}>
      <form className={styles.search_form}>
        <div className={styles.form_content}>

        <CgSearch id='icon'/>
        <input
          type="text"
          className={styles.input_search}
          value={search}
          placeholder="Поиск..."
          onChange={(e) => setSearchParams(e.target.value)}
        />
        <VscClose className={styles.close_icon} id='icon'/>
        </div>

      </form>
    </div>
  )
}

export { SearchInput };

