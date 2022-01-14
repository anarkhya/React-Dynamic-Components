import React from "react";
import ButtonAdmin from "./modals/ButtonAdmin";

const Client = ({ data }) => {
  return (
    <div className={data.classContainer}>
      <div className="text-right w-full">
        <ButtonAdmin type="utilisateur" />
      </div>
      <h1 className="text-center text-h1 font-light">{data.titre}</h1>
      <p className="md:w-1/2">{data.description}</p>
    </div>
  );
};

export default Client;
