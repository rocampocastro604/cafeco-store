import { Item } from "./Item"

export const ItemList = ({cafes}) => {
  return(
    <div className="flex flex-wrap justify-center">
      {cafes.map(product => <Item key={product.id} {...product} />)}
    </div>
  );
}
