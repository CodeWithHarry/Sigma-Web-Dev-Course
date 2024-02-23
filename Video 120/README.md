# We will use `Redux` with `Readux-Toolkit`

> It makes things easy !!

Visit: https://redux-toolkit.js.org/tutorials/quick-start

## Install Redux Toolkit and React-Redux
> Add the Redux Toolkit and React-Redux packages to your project:

```shell
npm install @reduxjs/toolkit react-redux
```

## Start the dev server

```shell
npm run dev
```

## We have a `Redux-Store` which have all the states.
- And, all components will contact the store, when they need anything.
- Components will not talk to each other.
- They will contact the redcuc store.
- Anything updates in redux store, will be u[dated everywhere.]

## How to create Redux Store?

1. Create a `redux` folder in `src` folder.
2. Create a `store.js` file in `redux` folder.
3. Go to [https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-store](https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-store)
4. Copy & Paste the JS or TS code in the `store.js` or `store.ts` file.

```js
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```

> Now, the Store is configured.
5. Import the store from `store.js` to `main.jsx`

```jsx
import { store } from "./redux/store.js"
import { Provider } from 'react-redux'
```
> Provider will provide the access to Redux-store to the whole App.


6. Wrap the <App /> in `main.jsx` with the Provider

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
		<App />
    </Provider>
  </React.StrictMode>
);
```

> It's on you, if you want to create a seperate store for wrappinga any part of app or it's component.

> Note: But, ideally, we wrap the whole app.

## Create a Redux State Slice

> To store a particular thing & to use it.

Visit: [https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice](https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice)

1. Create a `counter` folder in `redux` folder.
2. Create a `counterSlice.js`
3. Copy the code from the redux-toolkit

```js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```

4. import Reducer in store.js

```js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // reducer will help us to change the state.
  },
})
```

## Create new functions / reducer in the `counterSlice.js`

For Example: multiply, divide, zero function as reducers

```js
multipy: (state) => {
        state.value *= 2
},
divide: (state) => {
    state.value /= 4
},
zero: (state) => {
    state.value = 0
},
```

# Stackoverflow - What is a difference between action,reducer and store in redux?

[What is a difference between action,reducer and store in redux?](https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux#:~:text=Reducers%3A%20As%20we%20already%20know,the%20state%20of%20the%20application.)

- `Store` - Is what holds all the data your application uses.
- `Reducer` - is what manipulates that data when it recieves an action.
- `Action` - is what tells reducer to manipulate the store data, it carries the name and (not required) some data.
- `Reducer` is usually in a format of a switch statement, that switches between all possible Actions (Cases) and then manipulates the Store data based on action. When a reducer data changes within the redux, the properties in your components are changed and then the re-render occurs.

- `Dispatch` -> Way how we execute the action. eg: Dispatch the action to the reducer. Then reducer will check what to do and the store gets updated.