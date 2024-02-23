import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

// https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux