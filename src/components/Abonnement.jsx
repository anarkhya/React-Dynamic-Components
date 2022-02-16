import React from "react";
import ButtonAdmin from "./ButtonAdmin";
import Headline1 from "./Headline1";

/**
 *
 *
 * @param {*} { data }
 * data se trouvant dans data/Abonnement
 * Map sur les différents abonnements
 * button admin joint
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
        <Headline1 data={data} />
        <div className="lg:w-1/2">
          {data.details.map((detail) => (
            <div key={detail.id}>
              <p className="font-bold">{detail.detail}</p>
              <p>{detail.description1}</p>
              <p>{detail.description2}</p>
            </div>
          ))}
          <p className="normal-case text-mini font-regular">{data.miniText}</p>
        </div>
      </div>
    </div>
  );
};

export default Abonnement;
