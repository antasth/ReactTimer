import { createContext, useState } from 'react'

const SortContext = createContext()

const SortContextProvider = (props) => {
  const [sort, setSort] = useState({})
  const [filter, setFilter] = useState('')

  const setSortParams = (param) => {
    setSort(param)
  }
  const setFilterParams = (param) => {
    setFilter(param)
  }

  const value = {
    sort:sort,
    filter:filter,
    setSortParams: setSortParams,
    setFilterParams: setFilterParams,
  }
  return (
    <SortContext.Provider value={value}>{props.children}</SortContext.Provider>
  )
}

export { SortContext, SortContextProvider }
