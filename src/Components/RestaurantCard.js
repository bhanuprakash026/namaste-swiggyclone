import React from "react";

const RestaurantCard = (resInfo) => {
    const { avgRating, cloudinaryImageId, cuisines, locality, name } = resInfo?.resInfo?.info
    return (
        <div className="res-card-container">
            <div>
                <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId} alt="resImg" className="res-Img" />
            </div>
            <div>
                <h4>{name}</h4>
                <h6>{cuisines.join(', ')}</h6>
                <p>{locality}</p>
                <p>{avgRating}</p>
            </div>
        </div>
    )
}

export default RestaurantCard   