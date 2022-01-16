import React from "react";
import ButtonAdmin from "./modals/ButtonAdmin";

const Article = ({ data }) => {
  return (
    <div className={data.cls}>
      <div className="text-right w-full">
        <ButtonAdmin type="article" />
      </div>
      <h1 className="text-h1 font-light">{data.titre}</h1>
      <p className="md:w-1/2">{data.paragraphe}</p>
      {/* Si il y a du contenu, il s'affiche sinon rien */}
      {data.paragraphe2 ? (
        <p className="md:w-1/2">{data.paragraphe2contenu}</p>
      ) : (
        ""
      )}
      {data.paragraphe3 ? (
        <p className="md:w-1/2">{data.paragraphe3contenu}</p>
      ) : (
        ""
      )}
      {data.button ? (
        <button
          className="rounded-full bg-vert text-white px-6 py-2 text-sm"
          type="submit"
        >
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
