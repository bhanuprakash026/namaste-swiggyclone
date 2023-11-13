import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = () => {

  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)

  if (!resInfo) {
    return <div>Loading......</div>
  }

  const { areaName, avgRating, cuisines, name } = resInfo?.cards[0]?.card?.card?.info || {}
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <p>{areaName + " - " + avgRating}</p>
      </div>

      <div>
        
        <ul>
          {itemCards?.map((e) => (
            <li>{e.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RestaurantMenu