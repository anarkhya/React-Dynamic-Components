/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Echanges from "../../data/Echanges";
import "../../effects.css";

const ModalEchanges = ({ isShowing, hide }) => {
  /** state pour changer ou non la valeur des inputs */
  const [description, setDescription] = useState(Echanges[3].data.description);
  const [titre, setTitre] = useState(Echanges[3].data.titre);

  const [data, setData] = useState(Echanges[3].data.gommettes);
  console.log(setData);

  // const updateData = (value, type, obj) => {
  //   const newData = [...data];
  //   const index = newData.indexOf(obj);
  //   newData[index][type] = value;
  //   setData(newData);
  // };

  const [infos, setInfos] = useState(Echanges[3].data.infos);
  const [more, setMore] = useState(Echanges[3].data.more);

  /** copie du tableau details */
  // const onChangeDetails = (value, detail) => {
  //   const newDetails = [...details];
  //   const index = newDetails.indexOf(detail);
  //   newDetails[index] = value;
  //   setDetails(newDetails);
  // };

  // const addDetails = () => {
  //   const newDetails = [...details];
  //   newDetails.push("");
  //   setDetails(newDetails);
  // };

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
                Echanges - Modification du contenu
              </h1>
              {/* // style section interactions utilisateur */}
              <section className="p-2">
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
                <section className="flex flex-row-reverse my-2 gap-4 px-2">
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
                </section>

                {data.map((item) => {
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
                          className="transition bg-blanc hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                          type="file"
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
                          className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-vert/40 shadow-[10px_10px_0px_0px] shadow-vert/50 bg-vert text-white px-6 py-2 text-normal"
                          type="button"
                        >
                          Valider
                        </button>
                      </section>
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
                <section className="flex flex-row-reverse my-2 gap-4 px-2">
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
                </section>
                {/* 
                <div className="flex items-center w-full">
                  <button
                    type="submit"
                    className="transition hover:bg-rose hover:text-vert active:-skew-y-3 active:translate-y-1 active:shadow-vert/25 shadow-lg shadow-vert/50 rounded-full bg-vert text-white px-6 py-2 text-normal mx-auto my-2"
                    onClick={() => addDetails()}
                  >
                    Ajouter une autre description ?
                  </button>
                </div> */}
                {/* {details.map((detail) => {
                  return (
                    <label htmlFor="description">
                      Description supplémentaire
                      <textarea
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        placeholder="contenu du paragraphe"
                        value={detail?.detail}
                        onChange={(event) =>
                          onChangeDetails(event.target.value, detail)
                        }
                      />
                    </label>
                  );
                })} */}
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
