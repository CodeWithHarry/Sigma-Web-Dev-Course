import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multipy, divide, zero, incrementByAmount } from './redux/counter/counterSlice'

function App() {
	//const [count, setCount] = useState(0)
	const count = useSelector((state) => state.counter.value)
	const dispatch = useDispatch()


	return (
		<>
		<Navbar/>
			<div>
				<button onClick={() => dispatch(divide())}>/</button>
				<span>  </span>
				<button onClick={() => dispatch(decrement())}>-</button>
				<span>  </span>
				Currently counter is {count}
				<span>  </span>
				<button onClick={() => dispatch(increment())}>+</button>
				<span>  </span>
				<button onClick={() => dispatch(multipy())}>*</button>
				<span>  </span>
			</div>
			<button onClick={() => dispatch(zero())}>Zero</button>
			<span>  </span>
			<button onClick={() => dispatch(incrementByAmount(15))}>Increment by 15</button>
			<span>  </span>
		</>
	)
}

export default App
