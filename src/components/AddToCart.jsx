import React, { useState } from "react";
import Cart from "./Cart";


function AddToCart(){
  const [cart, setCart] = useState([]);
  
    const products = [
        {
          id: 1,
          name: "Nike Air Max",
          price: 129.99,
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
          description: "Classic sport shoes",
        },
        {
          id: 2,
          name: "Leather Watch",
          price: 199.99,
          image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
          description: "Luxury timepiece",
        },
        {
          id: 3,
          name: "Wireless Headphones",
          price: 159.99,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
          description: "Premium sound quality",
        },
    ];
    
  function addToCart(product) {
      setCart([...cart, product])
    }
  
    return (
      <div className="">
        <div className="cart-info">
          <h3>cart item: {cart.length}</h3>
        </div>

        <div className="product_grid">
          {products.map((product) => (
            <Cart key={product.id} {...product} {...product} isClicked={() => addToCart(product)} />
          ))}
        </div>
      </div>
    );
}

export default AddToCart;
