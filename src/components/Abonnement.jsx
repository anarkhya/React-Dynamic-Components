import React from "react";

const Abonnement = ({ data }) => {
  return (
    <>
      <div className="p-4 gap-3 md:max-w-2xl mx-auto flex items-center flex-col bg-gris_clair text-vert shadow-xl md:rounded-bl-lg md:rounded-br-lg">
        <h1 className="font-light text-h1">{data.title}</h1>
        <br />
        <br />
        <div className="">
          {data.details.map((detail) => (
            <p className="mx-5 font-bold text-h2">
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
    </>
  );
};

export default Abonnement;
