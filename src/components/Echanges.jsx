import React from "react";
import ButtonAdmin from "./modals/ButtonAdmin";

const Echanges = ({ data }) => {
  return (
    // composant categorie
    <div className="p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-vert text-blanc">
      <div className="text-right w-full">
        <ButtonAdmin type="echanges" />
      </div>
      <div className="md:w-1/2">
        <h1 className="">{data.texte}</h1>
        <p className="">{data.sousTexte}</p>
        <section className="p-4 flex justify-around">
          {data.gommettes.map((gommette) => (
            <section>
              <h1>{gommette.color}</h1>
            </section>
          ))}
        </section>

        {data.principe.map((princ) => (
          <section className="p-1 flex flex-row justify-around">
            {princ.color}
          </section>
        ))}
        <div className="p-4">
          <p>{data.infos}</p>
          <p>{data.more}</p>
        </div>
      </div>
    </div>
  );
};

export default Echanges;
