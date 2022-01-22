import React from "react";
import ButtonAdmin from "./ButtonAdmin";

/**
 *
 *
 * @param {*} { data }
 * data se trouvant dans data/Concept
 * un component article avec incrustation d'une image
 * bouton admin joint
 * @return {*}
 */
const ArticleImage = ({ data }) => {
  return (
    <div className="">
      <div
        className={data.cls}
        style={{ backgroundImage: "url(/assets/images/grid.png)" }}
      >
        <div className="text-right w-full">
          <ButtonAdmin type="articleImage" />
        </div>
        <h1 className="uppercase text-h1 font-light">{data.titre}</h1>
        <img className="w-32" src={data.src} alt={data.alt} />
        <p className="md:w-1/2">{data.description}</p>
      </div>
    </div>
  );
};

export default ArticleImage;
