import React from "react";
import ButtonAdmin from "./ButtonAdmin";
import Headline1 from "./Headline1";

/**
 *
 *
 * @param {*} { data }
 * data se trouvant dans data/Concept
 * un component article avec incrustation d'une image
 * button admin joint
 * @return {*}
 */
const ArticleImage = ({ data }) => {
  return (
    <div className="">
      <div
        className={data.cls}
        style={{ backgroundImage: "url(/assets/images/grid.png)" }}
      >
        <div className="w-full text-right">
          <ButtonAdmin type="articleImage" data={data} />
        </div>
        <Headline1 data={data} />
        <img className="w-32" src={data.src} alt={data.alt} />
        <p className="lg:w-1/2">{data.description}</p>
      </div>
    </div>
  );
};

export default ArticleImage;
