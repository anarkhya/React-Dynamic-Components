import React from "react";
import ButtonAdmin from "./ButtonAdmin";

const Article = ({ data }) => {
  return (
    <div className={data.cls}>
      <div className="text-right w-full">
        <ButtonAdmin type="article" />
      </div>
      <h1 className="text-h1 font-light leading-tight">{data.titre}</h1>
      <p className={data.clsPara}>{data.description}</p>
      {/* Si il y a du contenu, il s'affiche sinon rien */}
      {data.description2 ? (
        <p className={data.clsPara}>{data.description2contenu}</p>
      ) : (
        ""
      )}
      {data.description3 ? (
        <p className={data.clsPara}>{data.description3contenu}</p>
      ) : (
        ""
      )}
      {data.bouton ? (
        <button className={data.clsBouton} type="submit">
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
