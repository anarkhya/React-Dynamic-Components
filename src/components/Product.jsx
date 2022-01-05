import React from "react";

const Product = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <section>
        {data.presentation.map((pres) => (
          <div>
            <p>{pres.infos}</p>
            <img src={data.src} alt={data.alt} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Product;
