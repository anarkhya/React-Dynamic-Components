import React from "react";
import ButtonAdmin from "./ButtonAdmin";

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
        <h1 className="font-light text-h1">{data.titre}</h1>
        <br />
        <br />
        <div className="md:w-1/2">
          {data.details.map((detail) => (
            <p className="font-bold text-h2">
              {detail.detail}
              <p className="font-regular text-normal">{detail.description1}</p>
              <p className="font-regular text-normal">{detail.description2}</p>
              <p className="text-mini font-regular">
                {detail.infoDescription1}
              </p>
              <br />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Abonnement;
