import { FaAngleDown, FaAngleUp} from "react-icons/fa"; // FaAngleUp
import ItemsList from './ItemsList'

const RestaurantCategory = ( {data, showItems, id, onClick}) => {

  return (
    <div className="w-6/12 mx-auto bg-gray-100  p-4 my-4  text-lg shadow-lg ">
      <div className="flex justify-between font-bold cursor-pointer" onClick={() => onClick(id)}>
        <p>{data?.title} ({data?.itemCards?.length})</p>
        <span>{showItems? <FaAngleDown />: <FaAngleUp/>}</span>
      </div>

      <div>
        {showItems && <ItemsList items={data?.itemCards} />}
      </div>
    </div>
  )
}

export default RestaurantCategory