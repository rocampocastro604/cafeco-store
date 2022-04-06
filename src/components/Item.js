import ItemCount from "./ItemCount"

export const Item = ({id, title, description, img, price}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-4">
      <figure><img src={img} alt="Coffee Pic" /></figure>
      <div className="card-body">
        <h2 className="card-title justify-content">{title}</h2>
        <p>${price}</p>
        <p>{description}</p>
        <ItemCount stock={10} initial={0}></ItemCount>
        <div className="card-actions justify-center">
          <button className="btn btn-secondary btn-wide">Details</button>
        </div>
      </div>
    </div>
  )
}