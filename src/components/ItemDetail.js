import ItemCount from "./ItemCount";

const ItemDetail = (item) => {
  const currentItem = item.item;
  return(
    <>
     {
      currentItem.img
        ?
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={currentItem.img} alt='Product Pic' className="max-w-sm rounded-lg shadow-2xl" />
            <div className="ml-5">
              <h1 className="text-5xl font-bold">{currentItem.title}</h1>
              <h1 className="text-2xl font-bold mt-3"><b>${currentItem.price}</b></h1>
              <p className="py-6">{currentItem.description}</p>
              <div className="badge badge-warning gap-2">
                {currentItem.variety}
              </div>
              <div className="badge badge-error gap-2 ml-3">
                {currentItem.process}
              </div>
              <ItemCount stock={currentItem.stock} initial={0}></ItemCount>
            </div>
          </div>
        </div>
        : <div class="grid place-items-center h-screen">
            <progress class="progress progress-secondary w-56"></progress>
          </div>
     }
    </>
  )}

export default ItemDetail;
