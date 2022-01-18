/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalArticleImage = ({ isShowing, hide }) => {
  /** state pour changer ou non la valeur des inputs */
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");

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
                ArticleImage - Modification du contenu
              </h1>
              {/* // style section interactions utilisateur */}
              <section className="p-2">
                <label htmlFor="titre" className="">
                  Titre
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full font-light text-h1"
                    id="titre"
                    type="text"
                    value={titre}
                    placeholder="titre du bloc"
                    onChange={(event) => setTitre(event.target.value)}
                  />
                </label>
                <label htmlFor="nom" className="">
                  Image
                  <input
                    id="file"
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    type="file"
                  />
                </label>
                <label htmlFor="description">
                  Description
                  <textarea
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="description"
                    type="text"
                    value={description}
                    placeholder="contenu du paragraphe"
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </label>
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

export default ModalArticleImage;
