import React from "react";
import ButtonAdmin from "./ButtonAdmin";

/**
 *
 *
 * @param {*} { data }
 *  * Data se trouvant dans data/echanges
 * @return {*} Composant objets qui regroupe chaque objets présentés à la Trocquerie classés par catégorie via un map
 * button d'admin joint
 */
const Objets = ({ data }) => {
  return (
    <div className={data.cls}>
      <div className="w-full text-right">
        <ButtonAdmin type="objets" data={data} />
      </div>
      {data.category.map((cat) => (
        <section className="lg:w-1/2" key={cat.id}>
          <h2 className="font-bold">{cat.title}</h2>
          <p>{cat.paragraph}</p>
        </section>
      ))}
    </div>
  );
};
// composant qui categorise les objets sur la page Echanges
export default Objets;
