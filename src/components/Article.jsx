import React from "react";
import ButtonAdmin from "./ButtonAdmin";

const Article = ({ data }) => {
  return (
    <div className={data.classBg}>
      <ButtonAdmin />
      <h1 className={data.classTitre}>{data.titre}</h1>
      <p className={data.clsPara}>{data.paragraphe}</p>
      {/* Si il y a du contenu, il s'affiche sinon rien */}
      {data.paragraphe2 ? <p>{data.paragraphe2contenu}</p> : ""}
      {data.paragraphe3 ? <p>{data.paragraphe3contenu}</p> : ""}
      {data.button ? (
        <button className={data.classButton} type="submit">
          En savoir plus
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Article;

// composant article se retrouvant sur la page des Echanges
