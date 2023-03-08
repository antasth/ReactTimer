import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
  },
})

export const { setActiveIndex, setFilter, setSort } = filterSlice.actions

export default filterSlice.reducer
