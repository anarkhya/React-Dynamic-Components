import React from "react";

/**
 *
 *
 * @param {*} { data }
 * data se trouvant dans data/HeaderData
 * @return {*} Affiche le logo représentant la Trocquerie.fr
 */
const Logo = ({ data }) => {
  return (
    <div>
      <img className="h-16" src={data.src} alt={data.alt} />
    </div>
  );
};

export default Logo;
