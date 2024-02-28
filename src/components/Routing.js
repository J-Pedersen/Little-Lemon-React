import Home from '../pages/Home';
import About from './About';
import Menu from '../pages/Menu';
import Booking from '../pages/Booking';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Confirmation from './pages/Confirmation';
import { Routes, Route } from "react-router-dom";

function Routing() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/menu" element={<Menu />} />

            <Route path="/booking" element={<Booking />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/login" element={<Login />} />

            <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
    );
}

export default Routing;