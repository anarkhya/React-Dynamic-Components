import React from "react";

const Product = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <section>
        {data.presentation.map((pres) => (
          <div>
            <p>{pres.infos}</p>
            <img src={pres.src} alt={pres.alt} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Product;
