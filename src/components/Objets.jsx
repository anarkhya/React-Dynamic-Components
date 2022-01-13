import React from "react";
import ButtonAdmin from "./modals/ButtonAdmin";

const Objets = ({ data }) => {
  return (
    <div className="p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert">
      <div className="text-right w-full">
        <ButtonAdmin />
      </div>
      {data.categorie.map((cat) => (
        <section className="md:w-1/2">
          <h1 className="font-bold text-h2">{cat.appartenance}</h1>
          <p>{cat.cible}</p>
        </section>
      ))}
    </div>
  );
};
// composant qui categorise les objets sur la page Echanges
export default Objets;
