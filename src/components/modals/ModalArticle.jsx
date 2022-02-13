/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalArticle = ({ isShowing, hide, data }) => {
  /* states affichent data actuelle || user input */
  const [cls, setCls] = useState(data.cls);
  const [titre, setTitre] = useState(data.titre);
  const [description, setDescription] = useState(data.description);
  const [description2, setDescription2] = useState(data.description2);
  const [description3, setDescription3] = useState(data.description3);
  const [hasBouton, setHasBouton] = useState(data.bouton);
  const [urlBouton, setUrlBouton] = useState(data.url);

  const onUpdateComponent = () => {
    console.log({
      titre,
      description,
      description2,
      description3,
      hasBouton,
      urlBouton,
    });
    hide();
  };
  const onDeleteComponent = () => {
    console.log({
      titre,
      description,
      description2,
      description3,
      hasBouton,
      urlBouton,
    });
    hide();
  };

  const getModal = () => {
    /** isShowing affiche le modal */
    if (isShowing) {
      return ReactDOM.createPortal(
        <>
          {/* // style modal-overlay */}
          <div className="fixed top-0 left-0 w-screen h-screen z-1040 bg-secondary opacity-70" />
          {/* // style modal-wrapper */}
          <div
            className="fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto z-1050"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            {/* // style modal */}
            <div className="relative max-w-screen-sm p-3 mx-auto rounded z-100 m-14 bg-primary text-secondary">
              {/* // style modal-header */}
              <div className="flex justify-end">
                {/* // style modal-close-button */}
                {/* bouton croix pour fermer le modal */}
                <button
                  type="button"
                  className="leading-none text-h1"
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
                <label className="flex flex-col" htmlFor="b">
                  Arrière-plan secondary ?
                  <input
                    className="w-5 h-5 my-2"
                    id="b"
                    type="checkbox"
                    value={cls}
                    onChange={(event) => setCls(event.target.value)}
                  />
                </label>
                <label htmlFor="titre" className="">
                  Titre
                  <input
                    className="w-full px-2 mt-2 mb-4 font-light uppercase transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none text-h1"
                    id="titre"
                    type="text"
                    value={titre}
                    placeholder="titre du bloc"
                    onChange={(event) => setTitre(event.target.value)}
                  />
                </label>
                <label htmlFor="description">
                  Paragraphe
                  <textarea
                    className="w-full px-2 mt-2 mb-4 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                    id="description"
                    type="text"
                    rows="4"
                    value={description}
                    placeholder="contenu du paragraphe"
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </label>
                <label htmlFor="description">
                  2nd paragraphe
                  <textarea
                    className="w-full px-2 mt-2 mb-4 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                    id="description"
                    type="text"
                    rows="4"
                    value={description2}
                    placeholder="contenu du deuxième paragraphe"
                    onChange={(event) => setDescription2(event.target.value)}
                  />
                </label>
                <label htmlFor="description">
                  3eme paragraphe
                  <textarea
                    className="w-full px-2 mt-2 mb-4 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                    id="description"
                    type="text"
                    rows="4"
                    value={description3}
                    placeholder="contenu du troisième paragraphe"
                    onChange={(event) => setDescription3(event.target.value)}
                  />
                </label>
                <div className="flex flex-col">
                  <label htmlFor="b">
                    Présence de bouton ?
                    <input
                      className="w-5 h-5 m-2 mb-4"
                      id="b"
                      type="checkbox"
                      value={hasBouton}
                      placeholder="texte"
                      onChange={(event) => setHasBouton(event.target.value)}
                    />
                  </label>
                </div>
                <label htmlFor="btn-url">
                  Lien du bouton
                  <input
                    className="w-full px-2 mt-2 mb-2 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                    id="btn-url"
                    type="text"
                    value={urlBouton}
                    placeholder="/nom du menu, exemple: /concept pour lien vers page concept"
                    onChange={(event) => setUrlBouton(event.target.value)}
                  />
                </label>
              </section>
              {/* ////////////////////////////// boutons de validation et suppression */}
              <section className="flex flex-row-reverse gap-4 px-2 my-2">
                <button
                  className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2 text-normal"
                  type="button"
                  //  delete => string vide
                  onClick={() => onDeleteComponent()}
                >
                  Supprimer
                </button>
                <button
                  className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-secondary/40 shadow-[10px_10px_0px_0px] shadow-secondary/50 bg-secondary text-white px-6 py-2 text-normal"
                  type="button"
                  onClick={() => onUpdateComponent()}
                >
                  Valider
                </button>
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
