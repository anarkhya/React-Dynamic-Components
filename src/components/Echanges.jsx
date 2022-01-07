import React from "react";

const Echanges = ({ data }) => {
  return (
    // composant categorie
    <div className="bg-vert text-blanc pl-4 pt-4 pr-4">
      <h1 className="text-normal ">{data.texte}</h1>
      <p className="mt-4">{data.sousTexte}</p>
      {data.gommettes.map((gommette) => (
        <section className="flex flex-row pt-4">
          <h1>{gommette.color}</h1>
        </section>
      ))}
      {data.principe.map((princ) => (
        <section className="pt-4">{princ.color}</section>
      ))}
      <div className="text-center mt-7 mb-4 pb-4">
        <p>{data.infos}</p>
        <p>{data.more}</p>
      </div>
    </div>
  );
};

export default Echanges;
