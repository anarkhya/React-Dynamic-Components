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
    <div className="flex-shrink-0 flex items-center">
      <img
        className="block lg:hidden h-24 w-auto"
        src={data.src}
        alt={data.alt}
      />
      <img
        className="hidden lg:block h-24 w-auto"
        src={data.src}
        alt={data.alt}
      />
    </div>
  );
};

export default Logo;
