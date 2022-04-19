import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

export const Item = ({id, title, description, img, price, stock}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-2xl m-4">
      <figure><img src={img} alt="Coffee Pic" /></figure>
      <div className="card-body">
        <h2 className="card-title justify-content">{title}</h2>
        <p>${price}</p>
        <p>{description}</p>
        {/* <ItemCount stock={stock} initial={0}></ItemCount> */}
        <div className="card-actions justify-center">
          <Link to={`item/${id}`}><button className="btn btn-secondary btn-wide">Details</button></Link>
        </div>
      </div>
    </div>
  )
}