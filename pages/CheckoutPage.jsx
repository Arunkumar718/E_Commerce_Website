import React, { useState } from 'react';
 // Assuming you will create a specific CSS file for this component if needed

const CheckoutPage = ({ cart, setCart, setPage, showMessage }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const [formData, setFormData] = useState({ name: '', address: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        showMessage('Order completed! Thank you for your purchase.');
        setCart([]);
        setPage('home');
    };

    return (
        <div className="checkout-page">
            <h1 className="checkout-title">Checkout</h1>
            <div className="checkout-container">
                <h2 className="checkout-section-title">Order Summary</h2>
                <ul className="checkout-summary-list">
                    {cart.map(item => (
                        <li key={item.id} className="checkout-summary-item">
                            <div className="checkout-item-info">
                                <img src={item.image} alt={item.name} className="checkout-item-image" />
                                <div>
                                    <p className="checkout-item-name">{item.name}</p>
                                    <p className="checkout-item-qty">Qty: {item.quantity}</p>
                                </div>
                            </div>
                            <span className="checkout-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <div className="checkout-total-row">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <h2 className="checkout-section-title mt-8">Shipping Information</h2>
                <form onSubmit={handleCheckout} className="checkout-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address" className="form-label">Shipping Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>
                    <button type="submit" className="checkout-submit-button">
                        Complete Order
                    </button>
                </form>
            </div>
        </div>
    );
};
export default CheckoutPage;