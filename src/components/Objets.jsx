import React from "react";

const Objets = ({ data }) => {
  return (
    <div className="text-center bg-gris_clair h-auto pt-8 pb-8 gap-10">
      {data.categorie.map((cat) => (
        <section className="text-vert">
          <h1 className="text-h1">{cat.appartenance}</h1>
          <p>{cat.cible}</p>
        </section>
      ))}
    </div>
  );
};
// composant qui categorise les objets sur la page Echanges
export default Objets;
