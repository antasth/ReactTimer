import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeIndex: null,
  filter: '',
  sort: {
    value: 'default',
    label: 'По умолчанию',
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveIndex(state, action) {
      console.log(action)
      state.activeIndex = action.payload
    },
    setFilter(state, action) {
      state.filter = action.payload
    },
  },
})

export const { setActiveIndex, setFilter } = filterSlice.actions

export default filterSlice.reducer
