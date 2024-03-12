import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Booking from './pages/Booking';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ThankYou from './pages/ThankYou';
import './components/styles/normalize.css';

function App() {
  const location = useLocation();

  const renderComponent = () => {
    switch (location.pathname) {
      case '/menu':
        return <Menu />;
      case '/booking':
        return <Booking />;
      case '/cart':
        return <Cart />;
      case '/login':
        return <Login />;
      case '/thankyou':
          return <ThankYou />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header />
      {renderComponent()}
      <Footer />
    </>
  );
}

export default App;
