import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  itemsOnPage: 12,
  activeIndex: null,
  filter: '',
  sort: {
    value: 'default',
    option: '',
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
    setFilter(state, action) {
      state.filter = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setItemsOnPage(state, action) {
      state.itemsOnPage = action.payload
    },
  },
})

export const {
  setActiveIndex,
  setFilter,
  setSort,
  setCurrentPage,
  setItemsOnPage,
} = filterSlice.actions

export default filterSlice.reducer
