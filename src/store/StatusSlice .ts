import {createSlice} from '@reduxjs/toolkit'

interface AuthState {
    status: boolean | null
}

const initialState: AuthState = {
    status: null
}
const statusSlice = createSlice({
  name: 'status',
  initialState: initialState,
  reducers: {
    setLogin(state) {
        // console.log("status1:")
      state.status = true
    },
    removeLogin(state) {
        state.status = false
    },
  }
})

export const {setLogin,removeLogin} = statusSlice.actions
export default statusSlice.reducer;
