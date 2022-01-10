import React from "react";

const Map = ({ data }) => {
  return (
    <div className="">
      <div className="pt-8 objet-center hero container max-w-screen-lg mx-auto pb-2">
        <a href={data.url}>
          <img src={data.src} alt={data.alt} />
        </a>
      </div>
    </div>
  );
};

export default Map;
