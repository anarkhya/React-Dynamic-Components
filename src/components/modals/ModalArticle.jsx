/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalArticle = ({ isShowing, hide, data }) => {
  /* states affichent data actuelle || user input */
  const [titre, setTitre] = useState(data.titre);
  const [description, setDescription] = useState(data.description);
  const [hasBouton, setHasBouton] = useState(data.bouton);
  const [urlBouton, setUrlBouton] = useState(data.url);
  const [details, setDetails] = useState([]);

  /* affiche user input dans nouveau bloc */
  const onChangeDetails = (value, detail) => {
    const newDetails = [...details];
    const index = newDetails.indexOf(detail);
    newDetails[index] = value;
    setDetails(newDetails);
  };
  /* suppression ciblée avec le bon index - splice */
  const deleteDetail = (obj) => {
    const newDetails = [...details];
    const index = newDetails.indexOf(obj);
    newDetails.splice(index, 1);
    setDetails(newDetails);
  };
  /* ajoute nouveau bloc - push */
  const addDetails = () => {
    const newDetails = [...details];
    newDetails.push({});
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
                <label htmlFor="btn-url">
                  Lien du bouton
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-2 px-2 w-full"
                    id="btn-url"
                    type="text"
                    value={urlBouton}
                    placeholder="texte"
                    onChange={(event) => setUrlBouton(event.target.value)}
                  />
                </label>
                <div className="mx-auto my-8 border-b-2 border-vert w-1/2" />

                {/* ////////////////////////////      map l'ajout des éléments d'un nouveau bloc */}
                <div className="">
                  {details.map((detail) => {
                    return (
                      <div className="p-2 my-2 border-2 border-vert rounded">
                        <label htmlFor="description">
                          paragraphe supplémentaire
                          <textarea
                            className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                            type="text"
                            rows="5"
                            placeholder="paragraphe"
                            value={detail?.description}
                            onChange={(event) =>
                              onChangeDetails(event.target.value, detail)
                            }
                          />
                        </label>

                        <section className="flex flex-row-reverse my-2 gap-4 px-2">
                          <button
                            className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2 text-normal"
                            type="button"
                            onClick={() => deleteDetail()}
                          >
                            Supprimer
                          </button>
                        </section>
                      </div>
                    );
                  })}
                </div>

                {/* //////////////////////////        déclencheur du map des éléments d'un nouveau bloc */}
                <section className="flex justify-center mt-8 my-2 gap-4 px-2">
                  <button
                    type="submit"
                    className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-vert/40 shadow-[10px_10px_0px_0px] shadow-vert/50 bg-vert text-white px-6 py-2 my-2"
                    onClick={() => addDetails()}
                  >
                    Ajouter un autre bloc
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

export default ModalArticle;
