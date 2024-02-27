import Home from './pages/Home';
import About from './components/About';
import Menu from './pages/Menu';
import Booking from './pages/Booking';
import Cart from './pages/Cart';
import Login from './pages/Login';

export const routes = {
  home: {
    path: '/',
    component: Home,
  },
  about: {
    path: '/about',
    component: About,
  },
  menu: {
    path: '/menu',
    component: Menu,
  },
  reservations: {
    path: '/reservations',
    component: Booking,
  },
  orderOnline: {
    path: '/order-online',
    component: Cart,
  },
  login: {
    path: '/login',
    component: Login,
  },
};