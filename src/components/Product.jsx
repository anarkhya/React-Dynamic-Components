import React from "react";
import ButtonAdmin from "./ButtonAdmin";
import Headline1 from "./Headline1";

/**
 *
 *
 * @param {*} { data }
 * Data se trouvant dans data/echanges
 * @return {*} Le composant regroupant les produits que présentent la Trocquerie
 *  * Bouton d'admin joint
 */
const Product = ({ data }) => {
  // composant product se trouvant sur la page Echanges
  return (
    <div
      className={data.cls}
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <div className="w-full text-right">
        <ButtonAdmin type="product" data={data} />
      </div>
      <Headline1 data={data} />
      <section className="flex flex-col gap-3 mt-10 lg:w-1/2">
        {data.presentation.map((pres) => (
          <div
            key={pres.id}
            className="flex flex-col justify-center gap-3 my-2 lg:flex-row"
          >
            <p className=" lg:pr-4">{pres.infos}</p>
            <img
              src={pres.src}
              alt={pres.alt}
              className="mx-auto my-2 w-72 lg:w-52"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Product;
