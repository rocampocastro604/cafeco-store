import { useEffect, useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(initial);
  }, [initial])

const onIncrement = () => {
  if(quantity < stock){
    setQuantity(quantity+1);
  }
}

const onSubtract = () => {
  if(quantity > 0){
    setQuantity(quantity-1);
  }
}

  return(
    <div className="flex flex-wrap container w-56 m-auto justify-center">
    <label>Stock actual: {stock}</label>
      <div className="vertical-center">
        <div className="custom-number-input h-10">
          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button onClick={onSubtract} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                <span className="m-auto text-2xl font-thin">-</span>
            </button>
            <input type="text" inputMode="numeric"
              className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" 
              value={quantity}>
              </input>
            <button onClick={onIncrement} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        {
          stock && quantity
          ? <button className="btn btn-primary btn-wide" style={{marginTop: "12px"}} onClick={() => onAdd(quantity)}>Add</button>
          : <button className="btn btn-primary btn-wide" disabled="disabled" style={{marginTop: "12px"}}>Add</button>
        }
      </div>
    </div>
  );
}

export default ItemCount;