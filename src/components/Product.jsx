import React from "react";

const Product = ({ data }) => {
  return (
    <div className={data.cls}>
      <div className="content">
        <h1>{data.title}</h1>
        <p>{data.infos}</p>
        <img src={data.src} alt={data.alt} />
      </div>
    </div>
  );
};

export default Product;
