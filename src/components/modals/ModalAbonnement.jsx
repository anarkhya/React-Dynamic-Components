import React, { useState } from "react";
import ReactDOM from "react-dom";
import Abonnement from "../../data/Abonnement";

const ModalAbonnement = ({ isShowing, hide }) => {
  /** state qui est en lien avec la data de abonnements pour l'afficher */
  const [grandTitre, setGrandTitre] = useState(Abonnement[0].data.titre);
  const [titre, setTitre] = useState(Abonnement[0].data.details[0].detail);
  const [description1, setDescription1] = useState(
    Abonnement[0].data.details[0].description1
  );
  const [description2, setDescription2] = useState(
    Abonnement[0].data.details[0].description2
  );
  const [details, setDetails] = useState([]);
  const [detailsDesc1, setDEtailsDesc1] = useState([]);
  const [details3, setDetails3] = useState([]);

  /** copie du tableau details */
  const onChangeDetailsTitre = (value, detail) => {
    const newDetails = [...details];
    const index = newDetails.indexOf(detail);
    newDetails[index] = value;
    setDetails(newDetails);
  };
  const onChangeDetailsDesc1 = (value, detailDesc1) => {
    const newDetailsDesc1 = [...detailsDesc1];
    newDetailsDesc1[newDetailsDesc1.indexOf(detailDesc1)] = value;
    setDEtailsDesc1(newDetailsDesc1);
  };
  const onChangeDetailsDescription2 = (value, detail3) => {
    const newDetailsDescription2 = [...details3];
    const index = newDetailsDescription2.indexOf(detail3);
    newDetailsDescription2[index] = value;
    setDetails3(newDetailsDescription2);
  };

  const addDetails = () => {
    const newDetails = [...details];
    newDetails.push("");
    setDetails(newDetails);
    const newdetailsDesc1 = [...detailsDesc1];
    newdetailsDesc1.push("");
    setDEtailsDesc1(newdetailsDesc1);
    const newDetails3 = [...details3];
    newDetails3.push("");
    setDetails3(newDetails3);
  };

  const getModal = () => {
    /** isShowing est le petit logo pour ouvrir le modal */
    if (isShowing) {
      return ReactDOM.createPortal(
        <>
          {/* // style modal-overlay */}
          <div className="fixed top-0 left-0 z-1040 w-screen h-screen bg-vert opacity-70" />
          {/* // style modal-wrapper */}
          <div
            className="fixed top-0 left-0 z-1050 w-full h-full overflow-x-hidden overflow-y-auto"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            {/* // style modal */}
            <div className="z-100 max-w-screen-sm m-14 mx-auto relative bg-gris_clair p-3 rounded text-vert">
              {/* // style modal-header */}
              <div className="flex justify-end">
                {/* // style modal-close-button */}
                {/* bouton croix pour fermer le modal */}
                <button
                  type="button"
                  className="text-h1 leading-none"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h1 className="text-center text-h2">
                Abonnement - Modification du contenu
              </h1>
              {/* ////////////////////////////////      permet modifications éléments actuels par admin */}
              <section className="p-2">
                <label htmlFor="titre" className="">
                  Titre
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full font-light text-h1"
                    id="titre"
                    type="text"
                    value={grandTitre}
                    placeholder="Titre"
                    onChange={(event) => setGrandTitre(event.target.value)}
                  />
                </label>
                <label htmlFor="titre" className="">
                  Ligne en gras
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full font-bold text-h2"
                    id="titre"
                    type="text"
                    value={titre}
                    placeholder="contenu de la ligne en gras"
                    onChange={(event) => setTitre(event.target.value)}
                  />
                </label>
                <label htmlFor="description1">
                  Ligne 2
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                    id="description"
                    type="text"
                    value={description1}
                    placeholder="contenu de la ligne 2"
                    onChange={(event) => setDescription1(event.target.value)}
                  />
                </label>
                <label htmlFor="description2">
                  Ligne 3
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                    id="description"
                    type="text"
                    value={description2}
                    placeholder="contenu de la ligne 3"
                    onChange={(event) => setDescription2(event.target.value)}
                  />
                </label>

                {/* ////////////////////////////      map l'ajout des éléments d'un nouveau bloc */}
                <div className="border-vert border-4 p-2 rounded">
                  {details.map((detail) => {
                    return (
                      <label htmlFor="description">
                        Titre
                        <input
                          className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full font-bold text-h2"
                          type="text"
                          placeholder="titre"
                          value={detail?.detail}
                          onChange={(event) =>
                            onChangeDetailsTitre(event.target.value, detail)
                          }
                        />
                      </label>
                    );
                  })}
                  {detailsDesc1.map((detailDesc1) => {
                    return (
                      <label htmlFor="detailDesc1">
                        Ligne supplémentaire
                        <input
                          className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                          type="text"
                          placeholder="contenu de la ligne 1"
                          value={detailDesc1?.detailDesc1}
                          onChange={(event) =>
                            onChangeDetailsDesc1(
                              event.target.value,
                              detailDesc1
                            )
                          }
                        />
                      </label>
                    );
                  })}
                  {details3.map((detail3) => {
                    return (
                      <label htmlFor="detailDesc1">
                        Autre Ligne supplémentaire
                        <input
                          className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                          type="text"
                          placeholder="contenu de la ligne 2"
                          value={detail3?.detail3}
                          onChange={(event) =>
                            onChangeDetailsDescription2(
                              event.target.value,
                              detail3
                            )
                          }
                        />
                      </label>
                    );
                  })}
                </div>
                {/* ////////////////////////////////        déclencheur du map des éléments d'un nouveau bloc */}
                <div className="flex items-center w-full">
                  <button
                    type="submit"
                    className="transition hover:bg-rose hover:text-vert active:-skew-y-3 active:translate-y-1 active:shadow-vert/25 shadow-lg shadow-vert/50 rounded-full bg-vert text-white px-6 py-2 text-normal mx-auto my-2"
                    onClick={() => addDetails()}
                  >
                    Ajouter un autre bloc
                  </button>
                </div>
                <div className="flex justify-around mt-5">
                  <button
                    className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-vert/40 shadow-[10px_10px_0px_0px] shadow-vert/50 bg-vert text-white px-6 py-2 text-normal"
                    type="button"
                  >
                    Supprimer
                  </button>
                  <button
                    className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-vert/40 shadow-[10px_10px_0px_0px] shadow-vert/50 bg-vert text-white px-6 py-2 text-normal"
                    type="button"
                  >
                    Valider
                  </button>
                </div>
              </section>
            </div>
          </div>
        </>,
        document.body
      );
    }
    return null;
  };
  return getModal();
};

export default ModalAbonnement;
