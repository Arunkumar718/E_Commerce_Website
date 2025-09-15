import React from 'react';
import { Trash2 } from 'lucide-react';
 // Assuming you will create a specific CSS file for this component if needed

const CartPage = ({ cart, setPage, removeFromCart }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <div className="cart-page">
            <h2 className="cart-page-title">Your Cart</h2>
            {cart.length === 0 ? (
                <div className="cart-empty-message">
                    <p className="cart-empty-text">Your cart is empty.</p>
                    <button onClick={() => setPage('shop')} className="cart-empty-button">
                        Go to Shop
                    </button>
                </div>
            ) : (
                <div className="cart-grid">
                    <div className="cart-items-container">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3 className="cart-item-name">{item.name}</h3>
                                    <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                                    <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="cart-remove-button">
                                    <Trash2 size={24} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3 className="cart-summary-title">Cart Summary</h3>
                        <div className="cart-summary-row">
                            <span className="cart-summary-label">Subtotal:</span>
                            <span className="cart-summary-value">${total.toFixed(2)}</span>
                        </div>
                        <div className="cart-summary-row-small">
                            <span className="cart-summary-label-small">Shipping:</span>
                            <span className="cart-summary-value-small">Free</span>
                        </div>
                        <div className="cart-summary-total">
                            <span className="cart-summary-label-total">Total:</span>
                            <span className="cart-summary-value-total">${total.toFixed(2)}</span>
                        </div>
                        <button onClick={() => setPage('checkout')} className="checkout-button">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default CartPage;