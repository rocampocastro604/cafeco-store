import { useEffect, useState } from "react";
import { getData } from "../utils/data";
import { ItemList } from "./ItemList";

const ItemListContainer = () => {
const [cafes, setCafes] = useState([]);

useEffect(() => {
  async function retrieveData() {
    let incomingData = await getData();
    setCafes(incomingData)
  }
  retrieveData()
}, [])

  return(
    <>
      <ItemList cafes={cafes}/>
    </>
  );
}

export default ItemListContainer;