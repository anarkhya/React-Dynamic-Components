import React from "react";

const Abonnement = ({ data }) => {
  return (
    <>
      <div className="text-vert bg-gris_clair text-center">
        <h1 className="font-light text-h1 pt-7 underline decoration-double underline-offset-8">
          {data.title}
        </h1>
        <br />
        <br />
        <div className=" border-3">
          {data.details.map((detail) => (
            <p className="mx-5 font-bold text-h2">
              {detail.detail}
              <p className="font-regular text-normal">{detail.description1}</p>
              <p className="font-regular text-normal">{detail.description2}</p>
              <p className="text-mini">{detail.infoDescription1}</p>
              <br />
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Abonnement;
