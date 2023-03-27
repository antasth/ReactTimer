// Context нигде не используется, оставлен для примера
import { createContext, useState } from 'react'

const SortContext = createContext()

const SortContextProvider = (props) => {
  const [sort, setSort] = useState({})
  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState('')

  const setSortParams = (param) => {
    setSort(param)
  }
  const setFilterParams = (param) => {
    setFilter(param)
  }
  const setSearchParams = (param) => {
    setSearch(param)
  }

  const value = {
    // sort,
    // filter,
    // search,
    // setSortParams,
    // setFilterParams,
    // setSearchParams,
  }
  return (
    <SortContext.Provider value={value}>{props.children}</SortContext.Provider>
  )
}

export { SortContext, SortContextProvider }
