import React from "react";
import ButtonAdmin from "./ButtonAdmin";
import Headline1 from "./Headline1";

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
      className="flex flex-col items-center gap-3 p-4 mx-auto lg:text-lg bg-primary text-secondary"
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <div className="w-full text-right">
        <ButtonAdmin type="client" data={data} />
      </div>
      <Headline1 data={data} />
      <p className="lg:w-1/2">{data.description}</p>
    </div>
  );
};

export default Client;
