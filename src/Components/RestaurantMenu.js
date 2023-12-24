import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { RES_MENU_API } from '../utils/constants'
import useOnlineStatus from '../utils/useOnlineStatus'
import RestaurantCategory from './RestaurantCategory'

const apiConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  fail: "FAIL",
  inProgress: "IN_PROGRESS",
}

const RestaurantMenu = () => {

  const { resId } = useParams()
  const status = useOnlineStatus()

  const [resInfo, setResInfo] = useState(null)
  const [apiStatus, setApiStatus] = useState(apiConstants.initial)
  const [openCategory, setOpenCategory] = useState(null)

  const handleAccordian = (categoryId) => {
    setOpenCategory(categoryId === openCategory ? null : categoryId);

  }

  useEffect(() => {
    fetchMenu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMenu = async () => {
    setApiStatus(apiConstants.inProgress)
    const URL = RES_MENU_API
    const data = await fetch(URL + resId)

    if (data.ok) {
      const json = await data.json()
      setResInfo(json.data)
      setApiStatus(apiConstants.success)
    }
  }


  const { areaName, avgRating, cuisines, name } = resInfo?.cards[0]?.card?.card?.info || {}
  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) => e.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  

  const renderOfflineView = () => {
    return <h1>Offline.....</h1>;
  }

  const renderLoadingView = () => {
    return <h1>Loading....</h1>;
  }


  const resMenu = () => {
    return (
      <div>
        <div>
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <p>{areaName + " - " + avgRating}</p>
        </div>

        {categories.map((category, i) => (
          <RestaurantCategory
            key={i}
            data={category.card?.card}
            showItems={i === openCategory}
            id={i}
            onClick={handleAccordian}
          />
        ))}

      </div>
    );
  }


  const renderResMenu = () => {
    if (!status) {
      return renderOfflineView()
    } else if (status && apiStatus === apiConstants.inProgress) {
      return renderLoadingView()
    } else if (status && apiStatus === apiConstants.success) {
      return resMenu()
    }

  }

  return (
    <>
      {renderResMenu()}
    </>

  )
}

export default RestaurantMenu