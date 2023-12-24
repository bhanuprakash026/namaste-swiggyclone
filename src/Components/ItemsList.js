
const ItemsList = (items) => {

  return (

    <div className="p-4">
      {items?.items?.map((item) => (
        <div key={item?.card?.info?.id} className="flex justify-between">
          <div className="border-b-4 w-9/12 text-left p-4 m-3" >
            <p className="text-base font-[500]">{item?.card?.info?.name}</p>
            <p className="text-sm text-gray-500">{item?.card?.info?.description}</p>
          </div>

          <div className=" w-3/12 my-4">
            <div className="absolute">
              <button className="p-4 rounded-xl bg-[#242020]  text-white py-2">
                Add
              </button>
            </div>
            <img className='w-full h-full object-cover rounded-xl' src={item?.card?.info?.imageId && `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`} alt="" />
          </div>
        </div>


      ))}
    </div>



  )
}

export default ItemsList