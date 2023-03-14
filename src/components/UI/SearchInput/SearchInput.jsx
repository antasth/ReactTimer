import { useContext, useRef } from 'react'
import { CgSearch } from 'react-icons/cg'
import { VscClose } from 'react-icons/vsc'
import { SortContext } from '../../../context/SortContext'
import styles from './SearchInput.module.scss'

const SearchInput = () => {
  const { search, setSearchParams } = useContext(SortContext)

  const inputRef = useRef()
  const onClickClear = () => {
    setSearchParams('')
    inputRef.current.focus()
  }

  return (
    <div className={styles.search_box}>
      <form className={styles.search_form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.form_content}>
          <CgSearch id="icon" />
          <input
            type="text"
            className={styles.input_search}
            ref={inputRef}
            value={search}
            placeholder="Поиск..."
            onChange={(e) => setSearchParams(e.target.value)}
          />
          <VscClose
            className={styles.close_icon}
            id="icon"
            onClick={onClickClear}
          />
        </div>
      </form>
    </div>
  )
}

export { SearchInput }
