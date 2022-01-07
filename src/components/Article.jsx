import React from "react";

const Article = ({ data }) => {
  return (
    <div className={data.cls}>
      <h1 className="text-h1 text-center p-1 text-vert">{data.titre}</h1>
      <p className="text-h1 text-center text-vert">{data.paragraphe}</p>
    </div>
  );
};

export default Article;

// composant article se retrovant sur la page des Echanges
