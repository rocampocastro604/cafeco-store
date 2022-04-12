import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import data from "../utils/data";
import { ItemList } from "./ItemList";

const ItemListContainer = () => {
const [cafes, setCafes] = useState([]);
const { processId } = useParams();

useEffect(() => {
  if(processId === undefined) {
    customFetch(data)
    .then(result => setCafes(result))
  }else{
    customFetch(data.filter(dato => dato.process.toLowerCase() === processId))
    .then(result => setCafes(result))
  }
},[processId])

  return(
    <>
      <ItemList cafes={cafes}/>
    </>
  );
}

export default ItemListContainer;