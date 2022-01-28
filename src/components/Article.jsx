import React from "react";
import ButtonAdmin from "./ButtonAdmin";

/**
 *
 *
 * @param {*} { data }
 * data se trouvant dans data/Echanges
 * @return {*} un component article sans image avec un ternaire pour afficher ou non les différentes description et bouton
 */
const Article = ({ data }) => {
  let css = "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col pb-8 ";
  css += data.cls === 1 ? "bg-gris_clair text-vert" : "bg-vert text-blanc";
  return (
    <div
      className={css}
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <div className="text-right w-full">
        <ButtonAdmin type="article" data={data} />
      </div>
      <h1 className="uppercase text-h1 font-light leading-tight">
        {data.titre}
      </h1>
      <p className="md:w-1/2">{data.description}</p>
      <p className="md:w-1/2">{data.description2}</p>
      <p className="md:w-1/2">{data.description3}</p>

      {data.bouton ? (
        <a href={data.url}>
          <button className={data.clsBouton} type="submit">
            En savoir plus
          </button>
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default Article;

// composant article se retrouvant sur la page des Echanges
