import React from "react";
import ButtonAdmin from "./modals/ButtonAdmin";

const ArticleProjet = ({ data }) => {
  return (
    <div className="">
      <div className={data.classContainer}>
        <div className="text-right w-full">
          <ButtonAdmin />
        </div>
        <h1 className={data.classTitle}>{data.title}</h1>
        <img className={data.classImg} src={data.src} alt={data.alt} />
        <p className={data.classParagraph}>{data.paragraph}</p>
      </div>
    </div>
  );
};

export default ArticleProjet;
