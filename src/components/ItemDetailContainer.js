import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem }  from '../utils/data';
import data from '../utils/data';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})


  useEffect(() => {
    async function retrieveItem(i) {
      let incomingData = await getItem(data[i]);
      setItem(incomingData)
    }
    retrieveItem(1)

  },[])

  return(
    <ItemDetail item={item} />
  );
}

export default ItemDetailContainer;