import React from "react";

const Objets = ({ data }) => {
  return (
    <div>
      {data.categorie.map((cat) => (
        <section>
          <h1 className="text-h1">{cat.appartenance}</h1>
          <p>{cat.cible}</p>
        </section>
      ))}
    </div>
  );
};

export default Objets;
