import React from "react";
import ButtonAdmin from "./ButtonAdmin";

const Echanges = ({ data }) => {
  return (
    // composant categorie
    <div className="p-4 gap-3 md:max-w-2xl mx-auto flex items-center flex-col bg-vert text-blanc shadow-xl ">
      <div className="text-right w-full">
        <ButtonAdmin />
      </div>
      <h1 className="">{data.texte}</h1>
      <p className="">{data.sousTexte}</p>
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
