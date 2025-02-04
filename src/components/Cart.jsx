





function Cart({ image, name, price, description, isClicked, id }) {

  return (
    <div className="product-card">
          <img src={image} alt={name} className="product-image" />
          <div className="product-info">
              <h3>{name}</h3>
              <p>{description}</p>
              <p className="price">Price: ${price}</p>
              <button onClick={isClicked} className="add-to-cart-btn">
                  Add To Cart
              </button>
      </div>
    
    </div>
  )
}

export default Cart;