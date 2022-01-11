import React from "react";
import ButtonAdmin from "./ButtonAdmin";

const Objets = ({ data }) => {
  return (
    <div className="p-4 gap-3 md:max-w-2xl mx-auto flex flex-col items-center bg-gris_clair text-vert shadow-xl ">
      <div className="text-right w-full">
        <ButtonAdmin />
      </div>
      {data.categorie.map((cat) => (
        <section className="">
          <h1 className="font-bold text-h2">{cat.appartenance}</h1>
          <p>{cat.cible}</p>
        </section>
      ))}
    </div>
  );
};
// composant qui categorise les objets sur la page Echanges
export default Objets;
