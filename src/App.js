import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:processId' element={<ItemListContainer />}/>
      <Route path='item/:itemId' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
