import React from "react";

const Article = ({ data }) => {
  return (
    <div className={data.classBg}>
      <h1 className={data.classTitre}>{data.titre}</h1>
      <p>{data.paragraphe}</p>
      {data.paragraphe2 ? <p>{data.paragraphe2contenu}</p> : ""}
      {data.paragraphe3 ? <p>{data.paragraphe3contenu}</p> : ""}
      {data.button ? (
        <button className={data.classButton} type="submit">
          {data.buttonContenu}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Article;
