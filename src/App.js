import './App.css';
import Navbar from './components/Navbar';
//import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
const App = () => {
  return (
    <>
    <Navbar />
    {/* <ItemListContainer greeting="Usuario 1"/> */}
    <ItemDetailContainer />
    </>
  );
}

export default App;
