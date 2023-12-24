import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "orange", height: "40px", width: "40px", borderRadius: "50%", paddingTop: "5px",
      }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "orange", height: "40px", width: "40px", borderRadius: "50%", paddingTop: "5px"
      }}
      onClick={onClick}
    />
  );
}

export const Slick = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  const { slides } = props

  return (
    <>
      <Slider style={{ marginLeft: "60px", marginRight: "60px", paddingRight: "40px" }} {...settings}>

        {slides?.map((e) => (
          <div className="m-4 px-4" key={e.id}>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/${e.imageId}`} alt={e?.accessibility?.altText} />
          </div>
        ))}
      </Slider>
    </>
  )
}

