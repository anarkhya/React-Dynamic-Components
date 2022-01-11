import React from "react";

const Map = ({ data }) => {
  return (
    <div className="">
      <div className="">
        <iframe
          className={data.classMap}
          title="map"
          src={data.src}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Map;
