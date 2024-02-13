import React from 'react'
import SingleFruit from './SingleFruit';

const Fruits = () => {

    const fruitsArray = [
        { id:1,name: "Apple", emoji: "🍎", price: 299 },
        { id:2,name: "Banana", emoji: "🍌", price: 399 },
        { id:3,name: "Orange", emoji: "🍊", price: 499 },
        { id:4,name: "Grapes", emoji: "🍇", price: 349 },
        { id:5,name: "Strawberry", emoji: "🍓", price: 449 },
        { id:6,name: "Watermelon", emoji: "🍉", price: 599 },
        { id:7,name: "Pineapple", emoji: "🍍", price: 499 },
        { id:8,name: "Mango", emoji: "🥭", price: 399 },
        { id:9,name: "Cherry", emoji: "🍒", price: 349 },
        { id:10,name: "Kiwi", emoji: "🥝", price: 299 },
        { id:11,name: "Peach", emoji: "🍑", price: 449 },
        { id:12,name: "Plum", emoji: "🍑", price: 349 },
        { id:13,name: "Lemon", emoji: "🍋", price: 249 },
        { id:14,name: "Avocado", emoji: "🥑", price: 499 },
        { id:15,name: "Pomegranate", emoji: "🫐", price: 599 },
        { id:16,name: "Raspberry", emoji: "🍇", price: 449 },
        { id:17,name: "Blackberry", emoji: "🫐", price: 399 },
        { id:18,name: "Cantaloupe", emoji: "🍈", price: 549 },
        { id:19,name: "Dragon Fruit", emoji: "🐉", price: 599 },
        { id:20,name: "Passion Fruit", emoji: "🍇", price: 499 }
      ];
      




  return (
    <div>
        <SingleFruit props={fruitsArray}/>
    </div>
  )
}

export default Fruits