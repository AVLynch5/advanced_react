import { useState, Suspense, lazy, createContext } from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { Menu } from './components/Menu';
import { Cart } from './components/Cart';
import { NotFound } from './components/NotFound';
import { Login } from './components/Login';
import { Register } from './components/Register';
import './site.css';
import { getNextCartItemId } from './data/utilities';
import { NavBar } from './components/NavBar';
import { Fallback } from './components/Fallback';

// Order and Orders will lazy load
const Order = lazy(() => import('./components/Order'));
const Orders = lazy(() => import('./components/Orders'));

// create context for user
export const UserContext = createContext();

export function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={user}>
      <header id="pageHeader">
        <Toaster position="top-right" reverseOrder={true} />
        <NavBar setUser={setUser} />
      </header>
      <main>
        <Suspense fallback={<Fallback>Loading...</Fallback>}>
          <Routes>
            <Route path='/' element={<Menu addToCart={addToCart} />} />
            <Route path="/menu" element={<Navigate to="/" replace={true} />} />
            <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} changeCartItem={changeCartItem} />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/orders/:orderId' element={<Order />} />
            <Route path='/login' element={<Login setUser={setUser} />} />
            <Route path='/register' element={<Register setUser={setUser} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </UserContext.Provider>
  );
  function addToCart(menuItem) {
    const cartItem = {
      ...menuItem,
      itemId: menuItem.id,
      id: getNextCartItemId(cart),
    };
    setCart([...cart, cartItem]);
    toast.success(`${menuItem.name} put in your cart`)
  }
  function removeFromCart(cartItem) {
    setCart(cart.filter(oi => oi !== cartItem));
    toast.success(`${cartItem.name} removed`)
  }
  function changeCartItem(newCartItem) {
    const newCart = cart.map(ci => ci.id === newCartItem.id ? newCartItem : ci);
    setCart(newCart);
  }
}

