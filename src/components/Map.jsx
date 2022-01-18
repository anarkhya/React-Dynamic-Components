import React from "react";

/**
 *
 *
 * @param {*} { data }
 * Data se trouvant dans data/contact
 * @return {*} Composant affichant une map qui cible le lieu de la Trocquerie
 */
const Map = ({ data }) => {
  return (
    <div className="">
      <div className="bg-gris_clair ">
        <iframe
          className={data.classMap}
          title="map"
          src={data.src}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Map;
