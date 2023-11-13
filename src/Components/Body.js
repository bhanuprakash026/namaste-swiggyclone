import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([])
  const [searchText, setSearchText] = useState("")
  const [filteredResLists, setFilteredResLists] = useState([])



  useEffect(() => {
    fetchResList()
  }, [])

  const fetchResList = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4375432&lng=78.3662681&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json()
    console.log(json)
    setResList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredResLists(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  console.log(filteredResLists)

  return (
    <div className="body-container">
      <div className="filter-group">
        <div className="search-container">
          <input type="text" className="search" value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
          }} />
          <button className="search-btn" onClick={() => {
            const searchList = filteredResLists?.filter((e) => (
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

      <div className="res-cards-container">
        {filteredResLists?.map((eachRes) => (
          <Link to={"restaurants/"+eachRes?.info?.id} key={eachRes?.info?.id}><RestaurantCard resInfo={eachRes} /></Link>
        ))}

      </div>
    </div>
  )
}

export default Body