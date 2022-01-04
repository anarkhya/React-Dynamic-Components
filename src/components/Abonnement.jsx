import React from "react";

const Abonnement = ({ data }) => {
  return (
    <div className="abonnement">
      <h1 className="text-center text-[#275852] text-9xl">{data.title}</h1>
      <br />
      <br />
      <div className="details border-8 border-indigo-500">
        {data.details.map((detail) => (
          <p className="text-center text-lg">
            {detail.detail}
            <p className="text-emerald-800">{detail.description1}</p>
            <p>{detail.description2}</p>
            <p>{detail.infoDescription1}</p>
            <br />
          </p>
        ))}
      </div>
    </div>
  );
};

export default Abonnement;
