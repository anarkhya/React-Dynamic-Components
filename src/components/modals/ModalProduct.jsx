/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalProduct = ({ isShowing, hide, data }) => {
  /** state pour changer ou non la valeur des inputs */
  const [cls, setCls] = useState(data.cls);
  const [titre, setTitre] = useState(data.titre);
  const [presentation, setPresentation] = useState(data.presentation);
  const [alt, setAlt] = useState(data.presentation.alt);

  const updateDetail = (value, type, obj) => {
    const newPresentation = [...presentation];
    const index = newPresentation.indexOf(obj);
    newPresentation[index][type] = value;
    setPresentation(newPresentation);
  };
  const deleteDetail = (obj) => {
    const newPresentation = [...presentation];
    const index = newPresentation.indexOf(obj);
    newPresentation.splice(index, 1);
    setPresentation(newPresentation);
  };
  /* ajoute nouveau bloc - push */
  const addPresentation = () => {
    const newPresentation = [...presentation];
    newPresentation.push({ infos: "", src: "" });
    setPresentation(newPresentation);
  };

  const onUpdateComponent = () => {
    console.log({
      // titre,
      presentation,
    });
    hide();
  };
  const onDeleteComponent = () => {
    console.log({
      // titre,
      presentation,
    });
    hide();
  };

  const getModal = () => {
    /** isShowing affiche le modal */
    if (isShowing) {
      return ReactDOM.createPortal(
        <>
          {/* // modal-overlay */}
          <div className="fixed top-0 left-0 w-screen h-screen z-1040 bg-secondary opacity-70" />
          {/* // modal-wrapper */}
          <div
            className="fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto z-1050"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            {/* // modal */}
            <div className="relative max-w-screen-sm p-3 mx-auto rounded z-100 m-14 bg-primary text-secondary">
              {/* // modal-header */}
              <div className="flex justify-end">
                {/* // modal-close-button */}
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
              {/* contenu global du modal qui se trouve dans la page échanges */}
              <h1 className="p-2 text-center text-h2">
                Produits échangeables - Modification du contenu
              </h1>
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
              {presentation.map((item) => {
                return (
                  <div>
                    <label htmlFor="infos" className="">
                      infos - paragraphe
                      <textarea
                        id="infos"
                        className="w-full px-2 mt-2 mb-4 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                        type="text"
                        rows="4"
                        value={item.infos}
                        placeholder=""
                        onChange={(event) =>
                          updateDetail(event.target.value, "infos", item)
                        }
                      />
                    </label>
                    <p className="">
                      image actuelle
                      <img
                        className="mt-2 mb-4 w-52"
                        src={item.src}
                        alt={item.alt}
                      />
                    </p>
                    <label htmlFor="nom" className="">
                      nouvelle image
                      <input
                        id="file"
                        className="w-full px-2 mt-2 mb-4 transition rounded bg-dark hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                        type="file"
                      />
                    </label>
                    <label htmlFor="description">
                      Balise alt pour accessibilité
                      <input
                        className="w-full px-2 mt-2 mb-4 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                        id="description"
                        type="text"
                        value={alt}
                        placeholder="décrire succintement l'image, ex: paysage avec plage et palmiers"
                        onChange={(event) => setAlt(event.target.value)}
                      />
                    </label>
                    <section className="flex flex-row-reverse gap-4 px-2 my-2">
                      <button
                        className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2 text-normal"
                        type="button"
                        onClick={() => deleteDetail(item)}
                      >
                        Supprimer
                      </button>
                    </section>
                  </div>
                );
              })}
              <section className="flex justify-center gap-4 px-2 my-2 mt-8 mb-8">
                <button
                  type="submit"
                  className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-secondary/40 shadow-[10px_10px_0px_0px] shadow-secondary/50 bg-secondary text-white px-6 py-2 my-2"
                  onClick={() => addPresentation()}
                >
                  Ajouter un autre bloc
                </button>
              </section>
              <section className="flex flex-row-reverse gap-4 px-2 my-2">
                <button
                  className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2 text-normal"
                  type="button"
                  // delete => string vide
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

export default ModalProduct;
