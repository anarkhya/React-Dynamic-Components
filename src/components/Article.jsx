import React from "react";
import ButtonAdminArticle from "./modals/ButtonAdminArticle";

const Article = ({ data }) => {
  return (
    <div className={data.classBg}>
      <div className="text-right w-full">
        <ButtonAdminArticle />
      </div>
      <h1 className={data.classTitre}>{data.titre}</h1>
      <p className={data.classParagraph}>{data.paragraphe}</p>
      {/* Si il y a du contenu, il s'affiche sinon rien */}
      {data.paragraphe2 ? (
        <p className={data.classParagraph}>{data.paragraphe2contenu}</p>
      ) : (
        ""
      )}
      {data.paragraphe3 ? (
        <p className={data.classParagraph}>{data.paragraphe3contenu}</p>
      ) : (
        ""
      )}
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
