import React from "react";
import ButtonAdmin from "./ButtonAdmin";

/**
 *
 *
 * @param {*} { data }
 * data se trouvant dans data/Concept
 * affiche les différents clients de la Trocquerie
 * @return {*}
 */
const Client = ({ data }) => {
  return (
    <div
      className={data.cls}
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <div className="text-right w-full">
        <ButtonAdmin type="client" />
      </div>
      <h1 className="uppercase text-center text-h1 font-light">{data.titre}</h1>
      <p className="md:w-1/2">{data.description}</p>
    </div>
  );
};

export default Client;
