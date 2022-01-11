import React from "react";
import ButtonAdmin from "./ButtonAdmin";

const ArticleProjet = ({ data }) => {
  return (
    <div className="">
      <div className={data.classContainer}>
        <ButtonAdmin />
        <h1 className={data.classTitle}>{data.title}</h1>
        <img className={data.classImg} src={data.src} alt={data.alt} />
        <p className={data.classParagraph}>{data.paragraph}</p>
      </div>
    </div>
  );
};

export default ArticleProjet;
