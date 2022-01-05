import React from "react";

const ArticleProjet = ({ data }) => {
  return (
    <div className="">
      <div className={data.classContainerVert}>
        <h1 className={data.classTitle}>{data.title}</h1>
        <img
          className={data.classRoundedFullImg}
          src={data.src}
          alt={data.alt}
        />
        <p className={data.classParagraph}>{data.paragraph}</p>
      </div>
    </div>
  );
};

export default ArticleProjet;
