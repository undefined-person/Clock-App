import { createSlice } from '@reduxjs/toolkit'

interface MenuState {
  isOpen: boolean
}

const initialState: MenuState = {
  isOpen: false,
}

const menuSlice = createSlice({
  initialState,
  name: 'menu',
  reducers: {
    toggleActive(state) {
      state.isOpen = !state.isOpen
    },
  },
})

export const { toggleActive } = menuSlice.actions

export default menuSlice.reducer
