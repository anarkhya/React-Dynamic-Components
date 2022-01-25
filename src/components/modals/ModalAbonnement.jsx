import React, { useState } from "react";
import ReactDOM from "react-dom";
import Abonnement from "../../data/Abonnement";

const ModalAbonnement = ({ isShowing, hide }) => {
  /* states affichent data */
  const [grandTitre, setGrandTitre] = useState(Abonnement[0].data.titre);
  const [data, setData] = useState(Abonnement[0].data.details);
  const [description, setDescription] = useState(
    Abonnement[0].data.description
  );

  /* affiche user input */
  const updateData = (value, type, obj) => {
    const newData = [...data];
    const index = newData.indexOf(obj);
    newData[index][type] = value;
    setData(newData);
  };
  /* suppression ciblée avec le bon index */
  const deleteData = (value, type, obj) => {
    const newData = [...data];
    const index = newData.indexOf(obj);
    newData[index][type] = value;
    newData.splice(index, 1);
    setData(newData);
  };

  /* affiche user input dans nouveau bloc */
  const [details, setDetails] = useState([]);

  const onChangeDetails = (value, detail) => {
    const newDetails = [...details];
    const index = newDetails.indexOf(detail);
    newDetails[index] = value;
    setDetails(newDetails);
  };

  /* ajoute nouveau bloc - push */
  const addDetails = () => {
    const newDetails = [...details];
    newDetails.push("");
    setDetails(newDetails);
  };

  /* retire dernier bloc ajouté - pop */
  // const deleteDetails = () => {
  //   const newDetails = [...details];
  //   newDetails.pop("");
  //   setDetails(newDetails);
  // };

  /* tentative de suppression du bloc ciblé avec le bon index */
  const deleteDetails = (value, obj) => {
    const newDetails = [...details];
    const index = newDetails.indexOf(obj);
    newDetails[index] = value;
    newDetails.splice(index, 1);
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
                Abonnement - Modification du contenu
              </h1>

              {/* ////////////////////////////////      permet modifications éléments actuels par admin */}
              <label htmlFor="titre" className="">
                Titre
                <input
                  className="uppercase transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full font-light text-h1"
                  id="titre"
                  type="text"
                  value={grandTitre}
                  placeholder="Titre"
                  onChange={(event) => setGrandTitre(event.target.value)}
                />
              </label>
              <section className="flex flex-row-reverse my-2 gap-4 px-2">
                <button
                  className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2 text-normal"
                  type="button"
                  //  delete => string vide
                  onClick={() => setGrandTitre("")}
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
                    <label htmlFor="nom" className="">
                      ligne en gras
                      <input
                        id="nom"
                        className="transition uppercase font-bold text-h2 hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={item.detail}
                        placeholder=""
                        onChange={(event) =>
                          updateData(event.target.value, "detail", item)
                        }
                      />
                    </label>
                    <label htmlFor="nom" className="">
                      ligne 1
                      <input
                        id="nom"
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={item.description1}
                        placeholder=""
                        onChange={(event) =>
                          updateData(event.target.value, "description1", item)
                        }
                      />
                    </label>
                    <label htmlFor="nom" className="">
                      ligne 2
                      <input
                        id="nom"
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={item.description2}
                        placeholder=""
                        onChange={(event) =>
                          updateData(event.target.value, "description2", item)
                        }
                      />
                    </label>
                    <section className="flex flex-row-reverse my-2 gap-4 px-2">
                      <button
                        className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2 text-normal"
                        type="button"
                        onClick={(event) =>
                          deleteData(event.target.value, "", item)
                        }
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
                  </div>
                );
              })}

              <label htmlFor="titre" className="">
                ligne
                <input
                  className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                  id="titre"
                  type="text"
                  value={description}
                  placeholder="Titre"
                  onChange={(event) => setDescription(event.target.value)}
                />
              </label>

              {/* ////////////////////////////      map l'ajout des éléments d'un nouveau bloc */}
              <div className="">
                {details.map((detail) => {
                  return (
                    <div className="p-2 my-2 border-2 border-vert rounded">
                      <label htmlFor="description">
                        Ligne en gras
                        <input
                          className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full font-bold text-h2"
                          type="text"
                          placeholder="Ligne en gras"
                          value={detail?.detail}
                          onChange={(event) =>
                            onChangeDetails(event.target.value, detail)
                          }
                        />
                      </label>
                      <label htmlFor="detailDesc1">
                        Ligne supplémentaire 1
                        <input
                          className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                          type="text"
                          placeholder="contenu de la ligne 1"
                          value={detail?.description1}
                          onChange={(event) =>
                            onChangeDetails(event.target.value, detail)
                          }
                        />
                      </label>
                      <label htmlFor="detailDesc1">
                        Ligne supplémentaire 2
                        <input
                          className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                          type="text"
                          placeholder="contenu de la ligne 2"
                          value={detail?.description2}
                          onChange={(event) =>
                            onChangeDetails(event.target.value, detail)
                          }
                        />
                      </label>
                      <section className="flex flex-row-reverse my-2 gap-4 px-2">
                        <button
                          className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2 text-normal"
                          type="button"
                          onClick={(event) =>
                            deleteDetails(event.target.value, "", detail)
                          }
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

                {/* //////////////////////////        retire le dernier bloc ajouté */}
                {/* <button
                  type="submit"
                  className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2 my-2"
                  onClick={() => deleteDetails()}
                >
                  Retirer dernier bloc
                </button> */}
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
