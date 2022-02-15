import React from "react";
import ButtonAdmin from "./ButtonAdmin";

const Concept = ({ data }) => {
  // composant concept utlisé pour afficher les 2 citations dans page concept
  return (
    <div className="">
      <div className="flex flex-col items-center gap-3 p-4 mx-auto lg:text-lg bg-secondary text-dark">
        <div className="w-full text-right">
          <ButtonAdmin type="concept" data={data} />
        </div>
        <h1 className="font-light text-center uppercase text-h1">
          {data.title}
        </h1>
        <p className="lg:w-1/2 px-4 text-[28px] font-light leading-tight">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Concept;
