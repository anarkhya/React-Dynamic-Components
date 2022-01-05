import React from "react";

const Utilisateur = ({ data }) => {
  return (
    <div className="bg-gris_clair text-vert">
      <h1 className="text-h1 font-light pl-9 text-center underline decoration-double underline-offset-8">
        {data.titre}
      </h1>
      {data.textes.map((texte) => (
        <div className="font-regular text-h2 pl-4">
          <h3>{texte.detail1}</h3>
          <h3>{texte.detail2}</h3>
          <h3>{texte.detail3}</h3>
          <h3>{texte.detail4}</h3>
          <h3>{texte.detail5}</h3>
          <h3>{texte.detail6}</h3>
          <h3>{texte.detail7}</h3>
          <h3>{texte.detail8}</h3>
        </div>
      ))}
    </div>
  );
};

export default Utilisateur;
