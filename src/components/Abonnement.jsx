import React from "react";
import ButtonAdmin from "./ButtonAdmin";

/**
 *
 *
 * @param {*} { data }
 * data se trouvant dans data/Abonnement
 * Map sur les différents abonnements
 * Bouton admin joint
 * @return {*}
 */
const Abonnement = ({ data }) => {
  return (
    <div>
      <div
        className={data.cls}
        style={{ backgroundImage: "url(/assets/images/grid.png)" }}
      >
        <div className="w-full text-right">
          <ButtonAdmin type="abonnement" data={data} />
        </div>
        <h1 className="uppercase font-headlines text-h1">{data.titre}</h1>
        <br />
        <br />
        <div className="md:w-1/2">
          {data.details.map((detail) => (
            <div>
              <p className="font-bold">{detail.detail}</p>
              <p>{detail.description1}</p>
              <p>{detail.description2}</p>
            </div>
          ))}
          <p className="normal-case text-mini font-regular">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abonnement;
