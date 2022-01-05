import React from "react";

const ArticleProjet = ({ data }) => {
  return (
    <div className={data.cls}>
      <div className="container">
        <h1>{data.title}</h1>
        <img src={data.src} alt={data.alt} />
        <p>{data.caption}</p>
        <p>{data.paragraph}</p>
      </div>
    </div>
  );
};

export default ArticleProjet;
