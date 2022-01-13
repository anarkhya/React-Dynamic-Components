import React from "react";
import ButtonAdminArticleProjet from "./modals/ButtonAdminArticleProjet";

const ArticleProjet = ({ data }) => {
  return (
    <div className="">
      <div className={data.classContainer}>
        <div className="text-right w-full">
          <ButtonAdminArticleProjet />
        </div>
        <h1 className={data.classTitle}>{data.title}</h1>
        <img className={data.classImg} src={data.src} alt={data.alt} />
        <p className={data.classParagraph}>{data.paragraph}</p>
      </div>
    </div>
  );
};

export default ArticleProjet;
