import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
  return(
    <>
      <h3 style={{padding: "15px"}}>Con los buenos días {greeting}</h3>
      <ItemCount stock={10} initial={0} />
    </>
  );
}

export default ItemListContainer;