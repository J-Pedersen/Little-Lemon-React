import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Booking from './pages/Booking';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Confirmation from './pages/Confirmation';
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
      case '/confirmation':
          return <Confirmation />;
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
