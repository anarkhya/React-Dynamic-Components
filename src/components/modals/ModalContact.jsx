/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Contact from "../../data/Contact";

const ModalContact = ({ isShowing, hide }) => {
  /** state qui est en lien avec la data de contact pour l'afficher */
  const [telephone, setTelephone] = useState(Contact[0].data.phone);
  const [email, setEmail] = useState(Contact[0].data.mail);
  const [insta, setInsta] = useState(Contact[0].data.insta);

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
                Contact - Modification du contenu
              </h1>
              {/* // style section interactions utilisateur */}
              <section className="p-2">
                <label htmlFor="telephone" className="">
                  Téléphone
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="telephone"
                    type="text"
                    value={telephone}
                    placeholder="00 00 00 00 00"
                    onChange={(event) => setTelephone(event.target.value)}
                  />
                </label>
                <label htmlFor="email" className="">
                  E-mail
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="email"
                    type="text"
                    value={email}
                    placeholder="exemple@mail.com"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </label>
                <label htmlFor="insta">
                  Instagram
                  <input
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    id="insta"
                    type="text"
                    value={insta}
                    placeholder="nom du compte"
                    onChange={(event) => setInsta(event.target.value)}
                  />
                </label>
                <div className="flex justify-around mt-5">
                  <button
                    className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-vert/40 shadow-[10px_10px_0px_0px] shadow-vert/50 bg-vert text-white px-6 py-2 text-normal"
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
                </div>
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
