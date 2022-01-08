import React from "react";

const Map = ({ data }) => {
  return (
    <div className="">
      <div className="map">
        <a href={data.url}>
          <img src={data.src} alt={data.alt} />
        </a>
      </div>
    </div>
  );
};

export default Map;
