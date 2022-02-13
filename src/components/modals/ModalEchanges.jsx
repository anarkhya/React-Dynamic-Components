/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../effects.css";

const ModalEchanges = ({ isShowing, hide, data }) => {
  /** state pour changer ou non la valeur des inputs */
  const [cls, setCls] = useState(data.cls);
  const [titre, setTitre] = useState(data.titre);
  const [description, setDescription] = useState(data.description);
  const [gommettes, setGommettes] = useState(data.gommettes);
  const [alt, setAlt] = useState(data.gommettes.alt);
  const [infos, setInfos] = useState(data.infos);
  const [more, setMore] = useState(data.more);

  const updateGommettes = (value, type, obj) => {
    const newGommettes = [...gommettes];
    const index = newGommettes.indexOf(obj);
    newGommettes[index][type] = value;
    setGommettes(newGommettes);
  };
  console.log(updateGommettes);

  const onUpdateComponent = () => {
    console.log({
      titre,
      description,
      gommettes,
      infos,
      more,
    });
    hide();
  };
  const onDeleteComponent = () => {
    console.log({
      titre,
      description,
      gommettes,
      infos,
      more,
    });
    hide();
  };

  const getModal = () => {
    /** isShowing affiche le modal */
    if (isShowing) {
      return ReactDOM.createPortal(
        <>
          {/* // style modal-overlay */}
          <div className="fixed top-0 left-0 z-1040 w-screen h-screen bg-secondary opacity-70" />
          {/* // style modal-wrapper */}
          <div
            className="fixed top-0 left-0 z-1050 w-full h-full overflow-x-hidden overflow-y-auto"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            {/* // style modal */}
            <div className="z-100 max-w-screen-sm m-14 mx-auto relative bg-primary p-3 rounded text-secondary">
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
                Echanges - Modification du contenu
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
                  paragraphe
                  <textarea
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="titre"
                    rows="5"
                    type="text"
                    value={description}
                    placeholder="titre du bloc"
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </label>
                <label htmlFor="description">
                  ligne
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="description"
                    type="text"
                    value={titre}
                    placeholder="contenu du paragraphe"
                    onChange={(event) => setTitre(event.target.value)}
                  />
                </label>

                {gommettes.map((item) => {
                  return (
                    <div>
                      <p className="">
                        gommette actuelle
                        <img
                          className="blob w-16 h-16"
                          src={item.src}
                          alt={item.alt}
                        />
                      </p>
                      <label htmlFor="nom" className="">
                        nouvelle gommette
                        <input
                          id="file"
                          className="transition bg-dark hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                          type="file"
                        />
                      </label>
                      <label htmlFor="description">
                        Balise alt pour accessibilité
                        <input
                          className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                          id="description"
                          type="text"
                          value={alt}
                          placeholder="décrire succintement l'image, ex: paysage avec plage et palmiers"
                          onChange={(event) => setAlt(event.target.value)}
                        />
                      </label>
                    </div>
                  );
                })}
                <label htmlFor="titre" className="">
                  Texte
                  <textarea
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="titre"
                    rows="3"
                    type="text"
                    value={infos}
                    placeholder="titre du bloc"
                    onChange={(event) => setInfos(event.target.value)}
                  />
                </label>
                <label htmlFor="titre" className="">
                  mini texte
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="titre"
                    rows="3"
                    type="text"
                    value={more}
                    placeholder="titre du bloc"
                    onChange={(event) => setMore(event.target.value)}
                  />
                </label>
                {/* ////////////////////////////// boutons de validation et suppression */}
                <section className="flex flex-row-reverse my-2 gap-4 px-2">
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

export default ModalEchanges;
