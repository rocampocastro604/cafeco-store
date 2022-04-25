import { Item } from "./Item"

export const ItemList = ({cafes}) => {
  return(
    <>
     {
      cafes.length > 0
        ?
      <div className="flex flex-wrap justify-center">
        {cafes.map(product => <Item key={product.id} {...product} />)}
      </div>
    : <div className="grid place-items-center h-screen">
        <progress className="progress progress-secondary w-56"></progress>
      </div>
    }
    </>
  );
}
