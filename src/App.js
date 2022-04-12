import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:processId' element={<ItemListContainer />}/>
      <Route path='item/:itemId' element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
