import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer, // reducer will help us to change the state.
  },
})

// https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux#:~:text=Reducers%3A%20As%20we%20already%20know,the%20state%20of%20the%20application.