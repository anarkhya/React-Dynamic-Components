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
        className="p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert"
        style={{ backgroundImage: "url(/assets/images/grid.png)" }}
      >
        <div className="text-right w-full">
          <ButtonAdmin type="abonnement" />
        </div>
        <h1 className="uppercase font-light text-h1">{data.titre}</h1>
        <br />
        <br />
        <div className="md:w-1/2">
          {data.details.map((detail) => (
            <p className="uppercase font-bold text-h2">
              {detail.detail}
<<<<<<< HEAD
              <p className="normal-case font-regular text-normal">
                {detail.description1}
              </p>
              <p className="normal-case font-regular text-normal">
                {detail.description2}
=======
              <p className="normal-case font-regular">{detail.description1}</p>
              <p className="normal-case font-regular">{detail.description2}</p>
              <p className="normal-case text-mini font-regular">
                {detail.description}
>>>>>>> e90a2a92b900cc97fc5aac5148a60a64221f51f5
              </p>
              <br />
            </p>
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
