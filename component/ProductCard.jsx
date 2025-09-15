import React from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ product, addToCart, showMessage }) => (
    <div className="product-card">
        <div className="product-image-container">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-actions">
                <button onClick={() => showMessage(`Added ${product.name} to wishlist!`)} className="product-action-button">
                    <Heart size={20} />
                </button>
            </div>
        </div>
        <div className="product-info">
            <h3 className="product-title">{product.name}</h3>
            <span className="product-price">${product.price.toFixed(2)}</span>
            <button onClick={() => addToCart(product)} className="add-to-cart-button">
                Add To Cart
            </button>
        </div>
    </div>
);
export default ProductCard;
