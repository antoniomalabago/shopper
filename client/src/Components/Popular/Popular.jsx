import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'

const Popular = () => {
  const [popular_products, setPopularProducts] = useState([])

  useEffect(() => {
    fetch('https://e-commerce-backend-7r7i.onrender.com/popularinwomen')
      .then((res) => res.json())
      .then((data) => {
        setPopularProducts(data)
      })
  }, [])

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popular_products.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Popular