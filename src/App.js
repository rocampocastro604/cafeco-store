import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';
import Footer from './components/Footer';
import CartContextProvider from './contexts/CartContext';

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:processId' element={<ItemListContainer />}/>
        <Route path='item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
