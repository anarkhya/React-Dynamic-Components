/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalArticle = ({ isShowing, hide }) => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [titreBouton, setTitreBouton] = useState("");
  const [details, setDetails] = useState([]);

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
                    className="m-2 px-2 w-full rounded focus-within:shadow-xl focus:outline-none font-light text-h1"
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
                    className="m-2 px-2 w-full rounded focus-within:shadow-xl focus:outline-none"
                    id="description"
                    type="text"
                    value={description}
                    placeholder="contenu du paragraphe"
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </label>
                <label htmlFor="titreBouton">
                  Texte du bouton
                  <input
                    className="m-2 px-2 w-full rounded focus-within:shadow-xl focus:outline-none"
                    id="titreBouton"
                    type="text"
                    value={titreBouton}
                    placeholder="texte"
                    onChange={(event) => setTitreBouton(event.target.value)}
                  />
                </label>
                <div className="flex items-center w-full">
                  <button
                    type="submit"
                    className="my-2 mx-auto rounded-full bg-vert text-white px-6 py-2"
                    onClick={() => addDetails()}
                  >
                    Ajouter une autre description ?
                  </button>
                </div>
                {details.map((detail) => {
                  return (
                    <label htmlFor="description">
                      Description supplémentaire
                      <textarea
                        className="m-2 px-2 w-full rounded focus-within:shadow-xl focus:outline-none"
                        type="text"
                        placeholder="contenu du paragraphe"
                        value={detail?.detail}
                        onChange={(event) =>
                          onChangeDetails(event.target.value, detail)
                        }
                      />
                    </label>
                  );
                })}
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
