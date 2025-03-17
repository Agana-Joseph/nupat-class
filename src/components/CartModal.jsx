import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";
import { X } from "lucide-react";
import './CartModal.css';

const CartModal = ({ onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart-modal-overlay" id="cartModalOverlay">
      <div className="cart-modal-container" id="cartModalContainer">
        <div className="cart-modal-header">
          <h2 className="cart-modal-title">In your Shopping Cart:</h2>
          <X className="cart-modal-close" onClick={onClose} />
        </div>
        {cartItems.length === 0 ? (
          <p className="cart-empty-message">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">${item.price}</p>
              </div>
              <button 
                onClick={() => dispatch(removeItem(item.id))} 
                className="cart-item-remove"
              >
                <X />
              </button>
            </div>
          ))
        )}
        <button className="cart-checkout-button" id="checkoutButton">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartModal;