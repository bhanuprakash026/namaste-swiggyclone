import React from "react";

const RestaurantCard = (resInfo) => {
  const { avgRating, cloudinaryImageId, cuisines, locality, name } =
    resInfo?.resInfo?.info;

  return (
    <div className="m-4 w-[265px] h-[320px] bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
      <div>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="resImg"
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="text-xl font-semibold">{name}</h4>
        <h6 className="text-sm text-gray-600">{cuisines.join(", ")}</h6>
        <p className="text-sm text-gray-600">{locality}</p>
        <p className="text-sm font-bold text-orange-400">{avgRating} Stars</p>
      </div>
    </div>
  );
};

export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promted</label>
        <RestaurantCard />
      </div>
    )
  }
}

export default RestaurantCard;
