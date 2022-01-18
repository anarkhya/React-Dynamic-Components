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
    <div
      className="bg-gris_clair"
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <iframe
        className="md:max-w-2xl mx-auto border-0 w-full h-96 py-4"
        title="map"
        src={data.src}
        allowFullScreen=""
        loading="lazy"
      />
    </div>
  );
};

export default Map;
