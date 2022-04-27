import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import fetchOne from "../utils/fetchOne";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { itemId } = useParams()

  useEffect(() => {
    fetchOne(itemId)
    .then(result => setItem(result))
    .catch(err => console.log(err))
  },[itemId])

  return(
    <ItemDetail item={item} />
  );
}

export default ItemDetailContainer;