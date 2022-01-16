import React from "react";
import ButtonAdmin from "./ButtonAdmin";

const ArticleImage = ({ data }) => {
  return (
    <div className="">
      <div className={data.cls}>
        <div className="text-right w-full">
          <ButtonAdmin type="articleImage" />
        </div>
        <h1 className="text-h1 font-light">{data.titre}</h1>
        <img className="w-32 rounded-full" src={data.src} alt={data.alt} />
        <p className={data.clsPara}>{data.description}</p>
      </div>
    </div>
  );
};

export default ArticleImage;
