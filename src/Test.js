import items from './data/db.json'

import React from 'react'

const Test = () => {
  function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
  }

  console.log(randomInteger(1, 10))

  // console.log(watches.watches)

 const result = items.watches.map((watch) => {
    return { ...watch, rating: randomInteger(1, 10) }
  })

  console.log('result', result);
  return <div></div>
}

export { Test }
