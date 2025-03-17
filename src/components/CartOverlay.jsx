import React from "react";
import './CartOverlay.css';

const CartOverlay = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="cart-overlay" id="cartOverlay">
      <h3 className="cart-overlay-title">In your Shopping Cart are:</h3>
      {cart.length === 0 ? (
        <p className="cart-empty">Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
            </div>
            <button 
              className="cart-item-remove" 
              onClick={() => removeFromCart(index)}
            >
              ✕
            </button>
          </div>
        ))
      )}
      <p className="cart-total">Total: ${total.toFixed(2)}</p>
      <button className="cart-checkout-btn" id="checkoutBtn">
        Go to Checkout
      </button>
      <button className="cart-view-edit-btn" id="viewEditBtn">
        View or Edit Cart
      </button>
    </div>
  );
};

export default CartOverlay;