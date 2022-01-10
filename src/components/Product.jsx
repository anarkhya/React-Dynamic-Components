import React from "react";

const Product = ({ data }) => {
  // composant product se trouvant sur la page Echanges
  return (
    <div className="bg-vert">
      <h1 className="text-center text-h2 text-blanc pt-4 ">{data.title}</h1>
      <section className="flex flex-col">
        {data.presentation.map((pres) => (
          <div className=" p-8 flex justify-center items-center gap-4 flex-col xl:flex-row">
            <p className="text-blanc text-justify xl:">{pres.infos}</p>
            <img
              src={pres.src}
              alt={pres.alt}
              className="w-28 h-auto mx-auto md:w-36 xl:w-44"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Product;
