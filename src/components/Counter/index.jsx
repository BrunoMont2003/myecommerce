import { useState } from 'react'

const Counter = ({ className, onChange }) => {
  const [counter, setCounter] = useState(1)
  const handleChange = ({ target: { dataset: { counterAction } } }) => {
    if (counterAction === 'increment' && counter < 10) {
      setCounter(counter + 1)
    } else if (counterAction === 'decrement' && counter > 1) {
      setCounter(counter - 1)
    }
    onChange(counter)
  }
  return (
    <div className={` ${className} border border-nord2 dark:border-nord6 grid grid-cols-3 place-items-stretch bg-nord4 rounded dark:bg-nord2`}>
      <button data-counter-action='decrement' onClick={handleChange}>-</button>
      <button className='border-x cursor-default border-nord2 dark:border-nord6'>{counter}</button>
      <button data-counter-action='increment' onClick={handleChange}>+</button>
    </div>
  )
}

export default Counter
