import React from 'react';
import ProductCard from '../component/ProductCard.jsx';
import { categories, products } from '../data.js';
// Assuming you will create a specific CSS file for this component if needed

const ShopPage = ({ activeCategory, setActiveCategory, searchQuery, addToCart, showMessage }) => {
    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="shop-page">
            <aside className="sidebar">
                <h3 className="sidebar-title">ALL CATEGORIES</h3>
                <ul>
                    {categories.map(cat => (
                        <li key={cat}>
                            <button onClick={() => { setActiveCategory(cat); }} className={`category-button ${activeCategory === cat ? 'active' : ''}`}>
                                # {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="shop-main-content">
                <h2 className="shop-page-title">SHOP PRODUCT</h2>
                <div className="product-grid-shop">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} showMessage={showMessage} />
                    ))}
                </div>
            </main>
        </div>
    );
};
export default ShopPage;