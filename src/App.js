import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
const App = () => {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting="Usuario 1"/>
    </>
  );
}

export default App;
