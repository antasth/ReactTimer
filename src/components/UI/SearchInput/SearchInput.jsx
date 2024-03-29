import debounce from 'lodash.debounce'
import { useCallback, useRef, useState } from 'react'
import { CgSearch } from 'react-icons/cg'
import { VscClose } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../../redux/slices/filterSlice'
import styles from './SearchInput.module.scss'

const SearchInput = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')

  const inputRef = useRef()
  const onClickClear = () => {
    setSearchValue('')
    dispatch(setSearch(''))
    inputRef.current.focus()
  }

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearch(str))
    }, 1000),
    []
  )

  const onChangeInput = (e) => {
    setSearchValue(e.target.value)
    updateSearchValue(e.target.value)
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
            value={searchValue}
            placeholder="Поиск..."
            onChange={onChangeInput}
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
