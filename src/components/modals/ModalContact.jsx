/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalContact = ({ isShowing, hide, data }) => {
  /** state qui est en lien avec la data de contact pour l'afficher */
  const [cls, setCls] = useState(data.cls);
  const [titre, setTitre] = useState(data.titre);
  const [nom, setNom] = useState(data.nom);
  const [telephone, setTelephone] = useState(data.telephone);
  const [email, setEmail] = useState(data.mail);
  const [reseaux, setReseaux] = useState(data.reseaux);

  /* affiche user input */
  const updateReseaux = (value, type, obj) => {
    const newReseaux = [...reseaux];
    const index = newReseaux.indexOf(obj);
    newReseaux[index][type] = value;
    setReseaux(newReseaux);
  };

  const onUpdateComponent = () => {
    console.log({
      titre,
      nom,
      telephone,
      email,
      reseaux,
    });
    hide();
  };
  const onDeleteComponent = () => {
    console.log({
      titre,
      nom,
      telephone,
      email,
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
                Contact - Modification du contenu
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
                <label htmlFor="titre">
                  Titre
                  <input
                    id="titre"
                    className="w-full px-2 mt-2 mb-4 font-light transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none text-h1"
                    type="text"
                    value={titre}
                    placeholder="titre du bloc"
                    onChange={(event) => setTitre(event.target.value)}
                  />
                </label>
                <label htmlFor="titre">
                  Nom
                  <input
                    id="titre"
                    className="w-full px-2 mt-2 mb-4 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                    type="text"
                    value={nom}
                    placeholder="titre du bloc"
                    onChange={(event) => setNom(event.target.value)}
                  />
                </label>
                <label htmlFor="telephone" className="">
                  Téléphone
                  <input
                    className="w-full px-2 mt-2 mb-4 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                    id="telephone"
                    type="text"
                    value={telephone}
                    placeholder=""
                    onChange={(event) => setTelephone(event.target.value)}
                  />
                </label>
                <label htmlFor="email" className="">
                  E-mail
                  <input
                    className="w-full px-2 mt-2 mb-4 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                    id="email"
                    type="text"
                    value={email}
                    placeholder=""
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </label>

                {reseaux.map((item) => {
                  return (
                    <div>
                      <label htmlFor="1" className="">
                        réseau social
                        <input
                          id="1"
                          className="w-full px-2 mt-2 mb-4 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                          type="text"
                          value={item.url}
                          placeholder=""
                          onChange={(event) =>
                            updateReseaux(event.target.value, "url", item)
                          }
                        />
                      </label>
                    </div>
                  );
                })}
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

export default ModalContact;
