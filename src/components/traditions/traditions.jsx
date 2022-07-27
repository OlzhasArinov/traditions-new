import React, { useState } from 'react'
import { Bala } from '../bala/bala'
import { Navbar } from '../navbar'

function Traditions() {
  const [navIndex, setNavIndex] = useState(1)
  const handleTabView = (value) => {
    console.log(value)
    setNavIndex(value)
}
console.log('Traditions')
  return (
    <div>
        <Navbar handleTabView={handleTabView} />
        {
          navIndex === 1 ?
          <h1>Bala</h1> : null
        }
        {
          navIndex === 2 ?
          <h1>Jasospirim</h1> : null
        }

    </div>
  )
}

export default Traditions