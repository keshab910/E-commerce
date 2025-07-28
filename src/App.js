import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ConfirmModal from './components/ConfirmModal';
import Toast from './components/Toast';
import LoginForm from './components/LoginForm';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' });
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product);
    setConfirmModalOpen(true);
  };

  const handleConfirmAddToCart = (product) => {
    addToCart(product);
    setConfirmModalOpen(false);
    setSelectedProduct(null);
    // Show success toast
    setToast({
      isVisible: true,
      message: `${product.name} added to cart!`,
      type: 'success'
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };

  const handleSwitchToSignup = () => {
    // For now, just close the login modal
    // You can implement signup functionality later
    setLoginModalOpen(false);
    setToast({
      isVisible: true,
      message: 'Sign up functionality coming soon!',
      type: 'success'
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar 
          cartItems={cartItems} 
          onCartClick={() => setCartOpen(true)}
          onLoginClick={handleLoginClick}
        />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProductGrid onAddToCart={handleAddToCartClick} />
            </>
          } />
        </Routes>

        <Footer />

        <Cart
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          items={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />

        <ConfirmModal
          isOpen={confirmModalOpen}
          onClose={() => {
            setConfirmModalOpen(false);
            setSelectedProduct(null);
          }}
          onConfirm={handleConfirmAddToCart}
          product={selectedProduct}
        />

        <LoginForm
          isOpen={loginModalOpen}
          onClose={() => setLoginModalOpen(false)}
          onSwitchToSignup={handleSwitchToSignup}
        />

        <Toast
          isVisible={toast.isVisible}
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, isVisible: false })}
        />
      </div>
    </Router>
  );
}

export default App;
