import React from "react";

const Echanges = ({ data }) => {
  return (
    <div>
      <h1>{data.texte}</h1>
      <p>{data.sousTexte}</p>
      {data.gommettes.map((gommette) => (
        <section>
          <h1>{gommette.color}</h1>
        </section>
      ))}
      {data.principe.map((princ) => (
        <section>{princ.color}</section>
      ))}
      <p>{data.infos}</p>
      <p>{data.more}</p>
    </div>
  );
};

export default Echanges;
