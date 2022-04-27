import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import customFetch from "../utils/customFetch";
//import data from "../utils/data";
import { ItemList } from "./ItemList";

import fetchAll from "../utils/fetchAll";
import fetchCategory from "../utils/fetchCategory";

const ItemListContainer = () => {
const [cafes, setCafes] = useState([]);
const { processId } = useParams();

  //ComponentDidUpdate
  useEffect(() => {
    processId !== undefined
    ? fetchCategory(processId)
    .then(result => setCafes(result))
    .catch(err => console.log(err))
    : fetchAll()
    .then(result => setCafes(result))
    .catch(err => console.log(err));
  }, [processId])

  //ComponentWillUnmount
  useEffect(() => {
    return(() => {
      setCafes([]);
    })
  },[])

  return(
    <>
      <ItemList cafes={cafes}/>
    </>
  );
}

export default ItemListContainer;