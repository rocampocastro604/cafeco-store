import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import data from '../utils/data';
import customFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { itemId } = useParams()

  useEffect(() => {
    customFetch(data[itemId])
    .then(result => setItem(result))
  },[itemId])

  return(
    <ItemDetail item={item} />
  );
}

export default ItemDetailContainer;