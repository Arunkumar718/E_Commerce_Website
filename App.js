import React, { useState, useRef } from 'react';

import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import Modal from './component/Modal.jsx';

import Home from './pages/HomePage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

import { products } from './data.js';
import './App.css';

const App = () => {
  const [page, setPage] = useState('login'); // start from login page
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState(null);
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState(null);

  const searchInputRef = useRef(null);

  // Show temporary modal message
  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(null), 3000);
  };

  // =================== Cart Functions ===================
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showMessage(`Added ${product.name} to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    showMessage('Item removed from cart.');
  };

  // =================== Search ===================
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (page !== 'shop' && query.length > 0) {
      setPage('shop');
      setActiveCategory('All');
    } else if (page === 'shop' && query.length === 0) {
      setPage('home');
    }
  };

  // =================== Logout ===================
  const handleLogout = () => {
    setUserData(null);
    showMessage("You have been logged out.");
    setPage('login');
  };

  // =================== Page Routing ===================
  const MainContent = () => {
    switch (page) {
      case 'home':
        return (
          <Home
            setPage={setPage}
            addToCart={addToCart}
            showMessage={showMessage}
            products={products}
          />
        );
      case 'shop':
        return (
          <ShopPage
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchQuery={searchQuery}
            addToCart={addToCart}
            showMessage={showMessage}
          />
        );
      case 'cart':
        return (
          <CartPage
            cart={cart}
            setPage={setPage}
            removeFromCart={removeFromCart}
          />
        );
      case 'checkout':
        return (
          <CheckoutPage
            cart={cart}
            setCart={setCart}
            setPage={setPage}
            showMessage={showMessage}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage showMessage={showMessage} />;
      case 'login':
        return (
          <LoginPage
            setPage={setPage}
            showMessage={showMessage}
            setUserData={setUserData}
          />
        );
      default:
        return (
          <Home
            setPage={setPage}
            addToCart={addToCart}
            showMessage={showMessage}
            products={products}
          />
        );
    }
  };

  // =================== Render ===================
  return (
    <div className="app-container">
      <Header
        page={page}
        setPage={setPage}
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        userData={userData}
        handleLogout={handleLogout}
        cart={cart}
      />
      <MainContent />
      <Footer showMessage={showMessage} />
      <Modal text={message} onClose={() => setMessage(null)} />
    </div>
  );
};

export default App;
