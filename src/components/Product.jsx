import React from "react";

const Product = ({ data }) => {
  // composant product se trouvant sur la page Echanges
  return (
    <div className="bg-vert">
      <h1 className="text-center text-h2 text-blanc ">{data.title}</h1>
      <section>
        {data.presentation.map((pres) => (
          <div className="flex flex-col justify-around pt-8 pb-4 pl-3 pr-3">
            <p className="text-blanc text-normal text-left">{pres.infos}</p>
            <img
              src={pres.src}
              alt={pres.alt}
              className="w-28 h-28 self-center mt-4"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Product;
