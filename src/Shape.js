import React from 'react'
import { useState } from 'react'

const Shape = () => {
  const [naCircle, setNaCircle] = useState(true)
  return (
    <div>
      <div className={naCircle ? 'square' : 'circle'}></div>
      <button onClick={() => setNaCircle(!naCircle)} className='btn'>
        you like change am
      </button>
    </div>
  )
}

export default Shape
