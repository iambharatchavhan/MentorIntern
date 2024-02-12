import React from 'react'
import SingleFruit from './SingleFruit';

const List = () => {
    const fruits = [
        { id: 1, emoji: "🍎", price: 1.99 },
        { id: 2, emoji: "🍌", price: 0.99 },
        { id: 3, emoji: "🍇", price: 2.49 },
        { id: 4, emoji: "🍊", price: 1.79 },
        { id: 5, emoji: "🍓", price: 3.29 },
        { id: 6, emoji: "🥭", price: 2.99 },
        { id: 7, emoji: "🍍", price: 1.69 },
        { id: 8, emoji: "🍉", price: 2.79 },
        { id: 9, emoji: "🍒", price: 4.49 },
        { id: 10, emoji: "🥝", price: 2.19 },
        { id: 11, emoji: "🍑", price: 3.99 },
        { id: 12, emoji: "🍐", price: 2.29 },
        { id: 13, emoji: "🥑", price: 3.79 },
        { id: 14, emoji: "🍏", price: 1.49 },
        { id: 15, emoji: "🫐", price: 5.99 },
        { id: 16, emoji: "🍈", price: 2.89 },
        { id: 17, emoji: "🍋", price: 1.39 },
        { id: 18, emoji: "🍅", price: 2.09 },
        { id: 19, emoji: "🥥", price: 3.49 },
        { id: 20, emoji: "🫒", price: 4.99 }
      ];
      


  return (
    <>
    <SingleFruit fruits={fruits}/>
    
    </>

  )
}

export default List