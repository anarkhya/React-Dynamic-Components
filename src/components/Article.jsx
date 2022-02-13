import React from "react";
import { Link } from "react-router-dom";
import ButtonAdmin from "./ButtonAdmin";
import Headline1 from "./Headline1";

/**
 *
 *
 * @param {*} { data }
 * data se trouvant dans data/Echanges
 * @return {*} un component article sans image avec un ternaire pour afficher ou non les différentes description et bouton
 */
const Article = ({ data }) => {
  return (
    <div
      className={data.cls}
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <div className="w-full text-right">
        <ButtonAdmin type="article" data={data} />
      </div>
      <Headline1 data={data} />
      <p className="md:w-1/2">{data.description}</p>
      <p className="md:w-1/2">{data.description2}</p>
      <p className="md:w-1/2">{data.description3}</p>

      {data.bouton ? (
        <Link to={data.url}>
          <button className={data.clsBouton} type="submit">
            En savoir plus
          </button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Article;

// composant article se retrouvant sur la page des Echanges
