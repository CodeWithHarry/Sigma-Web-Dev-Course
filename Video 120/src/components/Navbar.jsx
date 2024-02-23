import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
  const count = useSelector((state) => state.counter.value)

  return (
    <div>Navbar & I'm {count}</div>
  )
}

export default Navbar