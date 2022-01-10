import React from "react";

const Utilisateur = ({ data }) => {
  return (
    <div className={data.classContainer}>
      <h1 className={data.classTitre}>{data.titre}</h1>
      {data.textes.map((texte) => (
        <div>
          <p>{texte.detail1}</p>
          <p>{texte.detail2}</p>
          <p>{texte.detail3}</p>
          <p>{texte.detail4}</p>
          <p>{texte.detail5}</p>
          <p>{texte.detail6}</p>
          <p>{texte.detail7}</p>
          <p>{texte.detail8}</p>
        </div>
      ))}
    </div>
  );
};

export default Utilisateur;
