import { createContext, useState } from 'react'

const SortContext = createContext()

const SortContextProvider = (props) => {
  const [sort, setSort] = useState('')
  const [filter, setFilter] = useState('')

  const setSortParam = (param) => {
    setSort(param)
  }
  const setFilterParam = (param) => {
    setFilter(param)
  }

  const value = {
    sort:sort,
    filter:filter,
    setSortParam: setSortParam,
    setFilterParam: setFilterParam,
  }
  return (
    <SortContext.Provider value={value}>{props.children}</SortContext.Provider>
  )
}

export { SortContext, SortContextProvider }
