import React from "react";
import ButtonAdmin from "./ButtonAdmin";

const Product = ({ data }) => {
  // composant product se trouvant sur la page Echanges
  return (
    <div className="p-4 gap-3 md:max-w-2xl mx-auto flex items-center flex-col bg-vert text-blanc shadow-xl ">
      <div className="text-right w-full">
        <ButtonAdmin />
      </div>
      <h1 className="text-center font-light text-h1">{data.title}</h1>
      <section className="flex flex-col gap-3">
        {data.presentation.map((pres) => (
          <div className=" flex justify-center items-center gap-3 flex-col md:flex-row">
            <p className="md:pr-4">{pres.infos}</p>
            <img
              src={pres.src}
              alt={pres.alt}
              className="w-28 h-auto mx-auto md:w-96"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Product;
