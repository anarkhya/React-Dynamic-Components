import React from "react";
import ButtonAdmin from "./ButtonAdmin";

const Concept = ({ data }) => {
  // composant concept utlisé pour afficher les 2 citations dans page concept
  return (
    <div className="">
      <div className={data.cls}>
        <div className="text-right w-full">
          <ButtonAdmin type="concept" />
        </div>
        <h1 className="text-center text-h1 font-light">{data.title}</h1>
        <p className="md:w-1/2 px-4 text-[28px] font-light leading-tight">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Concept;
