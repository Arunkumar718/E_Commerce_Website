import React from 'react';
import { CheckCircle } from 'lucide-react';
import { products, reviews } from '../data.js';
import ProductCard from '../component/ProductCard.jsx';
 // Assuming you will create a specific CSS file for this component if needed

const Hero = ({ setPage }) => (
    <section className="hero-section">
        <div className="hero-container">
            <div className="hero-text-content">
                <h2 className="hero-subtitle">Silver Aluminum</h2>
                <h1 className="hero-title">APPLE WATCH</h1>
                <p className="hero-description">30% off at your first odder</p>
                <button onClick={() => setPage('shop')} className="hero-button">
                    Shop Now
                </button>
            </div>
            <div className="hero-image-container">
                <img src="https://i.pinimg.com/736x/a9/ad/bd/a9adbdd03f7c49df41b97f25f78e9e05--apple-watch-mockup.jpg" alt="Apple Watch" className="hero-image" />
            </div>
        </div>
    </section>
);

const ProductSection = ({ title, products, showHeader, addToCart, showMessage }) => (
    <section className="product-section">
        <div className="product-section-header">
            <h2 className="section-title">{title}</h2>
            {showHeader && (
                <div className="category-links">
                    <a href="#" className="category-link active">New</a>
                    <a href="#" className="category-link">Featured</a>
                    <a href="#" className="category-link">Top Selling</a>
                </div>
            )}
        </div>
        <div className="product-grid">
            {products.map(product => <ProductCard key={product.id} product={product} addToCart={addToCart} showMessage={showMessage} />)}
        </div>
    </section>
);

const Home = ({ setPage, addToCart, showMessage }) => (
    <main>
        <Hero setPage={setPage} />
        <div className="main-content-container">
            <ProductSection title="TRENDING PRODUCT" products={products.slice(0, 4)} showHeader={true} addToCart={addToCart} showMessage={showMessage} />
            <div className="sale-banner">
                <div className="sale-text-content">
                    <h2 className="sale-title">Big Sale <span className="sale-highlight">Mackbook Pro</span></h2>
                    <p className="sale-subtitle">A TOUCH OF GENIUS</p>
                </div>
                <button onClick={() => setPage('shop')} className="sale-button">SHOP NOW</button>
            </div>
            <div className="feature-grid">
                <div className="feature-card">
                    <div className="feature-header">
                        <CheckCircle className="feature-icon" />
                        <span className="feature-title">GREAT SAVING</span>
                    </div>
                    <p className="feature-text">Save more with our special deals, available for a limited time.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-header">
                        <CheckCircle className="feature-icon" />
                        <span className="feature-title">FREE DELIVERY</span>
                    </div>
                    <p className="feature-text">Enjoy free and fast delivery on all your orders, straight to your doorstep.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-header">
                        <CheckCircle className="feature-icon" />
                        <span className="feature-title">24x7 SUPPORT</span>
                    </div>
                    <p className="feature-text">Our dedicated team is available round the clock to assist you anytime.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-header">
                        <CheckCircle className="feature-icon" />
                        <span className="feature-title">MONEY BACK</span>
                    </div>
                    <p className="feature-text">Enjoy a hassle-free money-back guarantee if you're not fully satisfied.</p>
                </div>
            </div>
            <div className="shop-product-testimonial-grid">
                <div className="shop-product-container">
                    <h2 className="shop-product-heading">SHOP PRODUCT</h2>
                    <div className="shop-product-grid">
                        {products.slice(4, 8).map(product => <ProductCard key={product.id} product={product} addToCart={addToCart} showMessage={showMessage} />)}
                    </div>
                </div>
               <div className="testimonial-container">
  {reviews.map((review, index) => (
    <div key={index} className="testimonial-card">
      <div className="testimonial-content">
        <img src={review.image} alt={review.name} className="testimonial-image" />
        <h4 className="testimonial-name">{review.name}</h4>
        <p className="testimonial-subtitle">{review.title}</p>
        <p className="testimonial-text">"{review.text}"</p>
      </div>
    </div>
  ))}
</div>

            </div>
        </div>
    </main>
);
export default Home;