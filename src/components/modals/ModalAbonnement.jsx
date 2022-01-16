/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalAbonnement = ({ isShowing, hide }) => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState([]);
  const [details2, setDetails2] = useState([]);
  const [details3, setDetails3] = useState([]);

  const onChangeDetailsTitre = (value, detail) => {
    const newDetails = [...details];
    const index = newDetails.indexOf(detail);
    newDetails[index] = value;
    setDetails(newDetails);
  };
  const onChangeDetailsDescription1 = (value, detail2) => {
    const newDetailsDescription1 = [...details2];
    const index = newDetailsDescription1.indexOf(detail2);
    newDetailsDescription1[index] = value;
    setDetails2(newDetailsDescription1);
  };
  const onChangeDetailsDescription2 = (value, detail3) => {
    const newDetailsDescription2 = [...details3];
    const index = newDetailsDescription2.indexOf(detail3);
    newDetailsDescription2[index] = value;
    setDetails3(newDetailsDescription2);
  };

  const addDetailsTitre = () => {
    const newDetails = [...details];
    newDetails.push("");
    setDetails(newDetails);
  };
  const addDetailsDescription1 = () => {
    const newDetails2 = [...details2];
    newDetails2.push("");
    setDetails2(newDetails2);
  };
  const addDetailsDescription2 = () => {
    const newDetails3 = [...details3];
    newDetails3.push("");
    setDetails3(newDetails3);
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
                Abonnement - Modification du contenu
              </h1>
              {/* // style section interactions utilisateur */}
              <section className="p-2">
                <label htmlFor="titre" className="">
                  Titre
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded m-2 px-2 w-full font-light text-h1"
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
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded m-2 px-2 w-full"
                    id="description"
                    type="text"
                    value={description}
                    placeholder="contenu du paragraphe"
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </label>

                {/* ////////////////////////////             controle l'ajout du titre d'un nouveau bloc */}
                <div className="flex items-center w-full">
                  <button
                    type="submit"
                    className="my-2 mx-auto rounded-full bg-vert text-white px-6 py-2"
                    onClick={() => addDetailsTitre()}
                  >
                    Ajouter un autre bloc, son titre ?
                  </button>
                </div>
                {details.map((detail) => {
                  return (
                    <label htmlFor="description">
                      Titre du bloc
                      <input
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded m-2 px-2 w-full font-bold text-h2"
                        type="text"
                        placeholder="Titre"
                        value={detail?.detail}
                        onChange={(event) =>
                          onChangeDetailsTitre(event.target.value, detail)
                        }
                      />
                    </label>
                  );
                })}

                {/* ///////////////////////         controle l'ajout de la première nouvelle ligne du bloc */}
                <div className="flex items-center w-full">
                  <button
                    type="submit"
                    className="my-2 mx-auto rounded-full bg-vert text-white px-6 py-2"
                    onClick={() => addDetailsDescription1()}
                  >
                    Ajouter une première ligne descriptive ?
                  </button>
                </div>
                {details2.map((detail2) => {
                  return (
                    <label htmlFor="detail2">
                      Ligne supplémentaire
                      <input
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded m-2 px-2 w-full"
                        type="text"
                        placeholder="contenu de la ligne"
                        value={detail2?.detail2}
                        onChange={(event) =>
                          onChangeDetailsDescription1(
                            event.target.value,
                            detail2
                          )
                        }
                      />
                    </label>
                  );
                })}

                {/* ///////////////////////         controle l'ajout de la seconde nouvelle ligne du bloc */}
                <div className="flex items-center w-full">
                  <button
                    type="submit"
                    className="my-2 mx-auto rounded-full bg-vert text-white px-6 py-2"
                    onClick={() => addDetailsDescription2()}
                  >
                    Ajouter une seconde ligne descriptive ?
                  </button>
                </div>
                {details3.map((detail3) => {
                  return (
                    <label htmlFor="detail2">
                      Autre Ligne supplémentaire
                      <input
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded m-2 px-2 w-full"
                        type="text"
                        placeholder="contenu de la ligne"
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
