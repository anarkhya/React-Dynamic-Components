import React from "react";

const Article = ({ data }) => {
  return (
    <div className={data.classBg}>
      <h1 className="text-h1 text-center p-1 text-vert">{data.titre}</h1>
      <p className="text-h2 text-center text-vert">{data.paragraphe2contenu}</p>
    </div>
  );
};

export default Article;

// composant article se retrovant sur la page des Echanges
