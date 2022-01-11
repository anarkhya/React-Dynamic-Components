import React from "react";
import ButtonAdmin from "./ButtonAdmin";

const Echanges = ({ data }) => {
  return (
    // composant categorie
    <div className="bg-vert text-blanc pl-4 pt-4 pr-4 gap-8 flex flex-col">
      <ButtonAdmin />
      <h1 className="text-center pl-20 pr-20">{data.texte}</h1>
      <p className="mt-4 text-center">{data.sousTexte}</p>
      <section className="flex justify-around">
        {data.gommettes.map((gommette) => (
          <section>
            <h1>{gommette.color}</h1>
          </section>
        ))}
      </section>

      {data.principe.map((princ) => (
        <section className="flex flex-row justify-around">
          {princ.color}
        </section>
      ))}
      <div className="text-center mt-7 mb-4 pb-4">
        <p>{data.infos}</p>
        <p>{data.more}</p>
      </div>
    </div>
  );
};

export default Echanges;
