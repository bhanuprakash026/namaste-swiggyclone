import  { useState, useEffect } from "react";
import RestaurantCard, { withPromoted } from "./RestaurantCard";
import { Link } from "react-router-dom";
import { Slick } from './Slick'
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([])
  const [searchText, setSearchText] = useState("")
  const [filteredResLists, setFilteredResLists] = useState([])
  const [sliders, setSliders] = useState([])

  const RestaurantWithPromoted = withPromoted(RestaurantCard)

  useEffect(() => {
    fetchResList()
  }, [])

  const fetchResList = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4375432&lng=78.3662681&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json()
    setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredResLists(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setSliders(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)

  }


  if (!useOnlineStatus()) {
    return <div>Offline</div>
  } else if (filteredResLists === null) {
    return <h1>Loading</h1>
  }

  return (
    <div className="w-10/12 mx-auto">
      <Slick slides={sliders} />
      <div className="body-container">
        <div className="filter-group">
          <div className="search-container">
            <input type="text" className="border-2 p-3 w-80 border-radius rounded-md mx-8 my-12 border-orange-300 focus:border-orange-500" value={searchText} onChange={(e) => {
              setSearchText(e.target.value)
            }} />
            <button className="bg-[#ffa600] px-8 py-4 text-white font-bold font-mono size text-lg hover:bg-orange-500" onClick={() => {
              const searchList = resList?.filter((e) => (
                e.info?.name.toLowerCase().includes(searchText.toLowerCase())
              ))
              setFilteredResLists(searchList)
              // setSearchText("")
            }}>Search</button>
          </div>
          <div>
            <button className="filter-btn" onClick={() => {
              const filteredResList = resList?.filter((e) => (
                e.info.avgRating > 4
              ))
              setFilteredResLists(filteredResList)
            }}>Top Rated Restaurants</button>
          </div>
        </div>

        <div className="res-cards-container flex m-8 flex-wrap">
          {filteredResLists?.map((eachRes) => (

            <Link to={"restaurants/" + eachRes?.info?.id} key={eachRes?.info?.id}>{eachRes?.info?.promoted ? (<RestaurantWithPromoted resInfo={eachRes} />) : (<RestaurantCard resInfo={eachRes} />)}</Link>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Body
