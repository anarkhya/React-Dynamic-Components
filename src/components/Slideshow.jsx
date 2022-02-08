import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "../assets/images/pexels-mathilde-langevin-10897821.jpg",
  "../assets/images/pexels-mark-vegera-1089425.jpg",
  "../assets/images/gommette-rose.png",
];

const Slideshow = () => {
  return (
    <div className="">
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span />
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span />
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
