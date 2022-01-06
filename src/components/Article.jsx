import React from "react";

const Article = ({ data }) => {
  return (
    <div className={data.classBg}>
      <h1 className={data.classTitre}>{data.titre}</h1>
      <p>{data.paragraphe}</p>
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
