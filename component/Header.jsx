import React from 'react';
import { Search, User, LogOut, LogIn, ShoppingCart } from 'lucide-react';
 // Assuming you will create a specific CSS file for this component if needed

const Header = ({ page, setPage, searchQuery, handleSearchChange, userData, handleLogout, cart }) => {
    return (
        <header className="header">
            <div className="header-top-bar">Free Shipping When Shopping upto $1000</div>
            <div className="header-container">
                <div className="header-logo-section">
                    <img src="https://www.pngitem.com/pimgs/m/178-1783030_online-shopping-logo-png-transparent-png.png" alt="Techayo Logo" className="logo-image" />
                    <span className="logo-text">My Shop</span>
                </div>
                <div className="header-search-section">
                    <input
                        type="text"
                        placeholder="search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <button className="search-button">
                        <Search size={20} />
                    </button>
                </div>
                <div className="header-auth-section">
                    {userData ?
                        (
                            <button onClick={handleLogout} className="auth-button">
                                <LogOut size={20} />
                                <span>Logout</span>
                            </button>
                        ) : (
                            <button onClick={() => setPage('login')} className="auth-button">
                                <LogIn size={20} />
                                <span>Login</span>
                            </button>
                        )}
                </div>
            </div>
            <nav className="header-nav">
                <div className="nav-container">
                    <div className="nav-user-info">
                        <User size={20} />
                        <span className="nav-user-text">{userData ?
                            userData.email : 'Guest'}</span>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#" onClick={() => setPage('home')} className="nav-link">Home</a></li>
                        <li><a href="#" onClick={() =>
                            setPage('shop')} className="nav-link">Shop</a></li>
                        <li>
                            <a href="#" onClick={() => setPage('cart')} className="nav-link nav-cart-link">
                                <ShoppingCart size={20} />
                                {cart.length > 0 && (
                                    <span className="cart-count">{cart.length}</span>
                                )}
                            </a>
                        </li>
                        <li><a href="#" onClick={() => setPage('about')} className="nav-link">About</a></li>
                        <li><a href="#" onClick={() => setPage('contact')} className="nav-link">Contact</a></li>
                    </ul>
                    <a href="#" className="promo-button">FLAT 10% OVER ALL IPHONE</a>
                </div>
            </nav>
        </header>
    );
};
export default Header;
