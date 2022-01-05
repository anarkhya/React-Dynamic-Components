import React from "react";

const Utilisateur = ({ data }) => {
  return (
    <div className="">
      <div className="bg-gris_clair">
        <h1 className="text-h1">{data.titre}</h1>
        {data.textes.map((texte) => (
          <h3 className="">
            {texte.detail1}
            <h3>{texte.detail1}</h3>
            <h3>{texte.detail1}</h3>
            <h3>{texte.detail1}</h3>
            <h3>{texte.detail1}</h3>
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Utilisateur;
