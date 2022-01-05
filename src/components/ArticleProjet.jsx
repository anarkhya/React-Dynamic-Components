import React from "react";

const ArticleProjet = ({ data }) => {
  return (
    <div className="">
      <div className="px-4 flex items-center flex-col bg-vert text-blanc">
        <h1 className="pb-2 text-h1 font-light ">{data.title}</h1>
        <img className="rounded-full" src={data.src} alt={data.alt} />
        <p className="">{data.caption}</p>
        <p className="py-3">{data.paragraph}</p>
      </div>
    </div>
  );
};

export default ArticleProjet;
