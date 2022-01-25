/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Home from "../../data/Home";

const ModalArticle = ({ isShowing, hide }) => {
  /** state pour changer ou non la valeur des inputs */
  const [titre, setTitre] = useState(Home[0].data.titre);
  const [description, setDescription] = useState(Home[0].data.description);
  const [hasBouton, setHasBouton] = useState(Home[0].data.bouton);
  const [titreBouton, setTitreBouton] = useState(Home[0].data.boutonContenu);
  const [details, setDetails] = useState([]);

  /** copie du tableau details */
  const onChangeDetails = (value, detail) => {
    const newDetails = [...details];
    const index = newDetails.indexOf(detail);
    newDetails[index] = value;
    setDetails(newDetails);
  };

  const addDetails = () => {
    const newDetails = [...details];
    newDetails.push("");
    setDetails(newDetails);
  };

  const getModal = () => {
    /** isShowing affiche le modal */
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
                Article - Modification du contenu
              </h1>
              {/* // style section interactions utilisateur */}
              <section className="p-2">
                <label htmlFor="titre" className="">
                  Titre
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full uppercase font-light text-h1"
                    id="titre"
                    type="text"
                    value={titre}
                    placeholder="titre du bloc"
                    onChange={(event) => setTitre(event.target.value)}
                  />
                </label>
                <label htmlFor="description">
                  Description
                  <textarea
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="description"
                    type="text"
                    rows="4"
                    value={description}
                    placeholder="contenu du paragraphe"
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </label>
                <div className="flex flex-col">
                  <label htmlFor="b">
                    Présence de bouton ?
                    <input
                      className="m-2 w-5 h-5 mb-4"
                      id="b"
                      type="checkbox"
                      value={hasBouton}
                      placeholder="texte"
                      onChange={(event) => setHasBouton(event.target.value)}
                    />
                  </label>
                </div>
                <label htmlFor="titreBouton">
                  Texte du bouton
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-2 px-2 w-full"
                    id="titreBouton"
                    type="text"
                    value={titreBouton}
                    placeholder="texte"
                    onChange={(event) => setTitreBouton(event.target.value)}
                  />
                </label>
                <section className="flex flex-row-reverse my-2 gap-4 px-2">
                  <button
                    className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2 text-normal"
                    type="button"
                  >
                    Supprimer
                  </button>
                  <button
                    className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-vert/40 shadow-[10px_10px_0px_0px] shadow-vert/50 bg-vert text-white px-6 py-2  "
                    type="button"
                  >
                    Valider
                  </button>
                </section>
                <div className="mx-auto my-8 border-b-2 border-vert w-1/2" />
                {/* map sur la data de concept */}
                {details.map((detail) => {
                  return (
                    <div className="div">
                      <label htmlFor="description">
                        Description supplémentaire
                        <textarea
                          className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-2 px-2 w-full"
                          type="text"
                          rows="4"
                          placeholder="contenu du paragraphe"
                          value={detail?.detail}
                          onChange={(event) =>
                            onChangeDetails(event.target.value, detail)
                          }
                        />
                      </label>
                      <div className="flex flex-row-reverse my-2 gap-4 px-2 ">
                        <button
                          className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2 text-normal"
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
                    </div>
                  );
                })}

                <div className="flex flex-row-reverse mt-16 px-2">
                  <button
                    className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-vert/40 shadow-[10px_10px_0px_0px] shadow-vert/50 bg-vert text-white px-6 py-2  "
                    type="button"
                    onClick={() => addDetails()}
                  >
                    Ajouter une autre description ?
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

export default ModalArticle;
