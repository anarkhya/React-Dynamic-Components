/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalObjets = ({ isShowing, hide }) => {
  const [appartenance, setAppartenance] = useState("");
  const [info, setInfo] = useState("");

  const getModal = () => {
    if (isShowing) {
      return ReactDOM.createPortal(
        <>
          {/* // modal-overlay */}
          <div className="fixed top-0 left-0 z-1040 w-screen h-screen bg-vert opacity-70" />
          {/* // modal-wrapper */}
          <div
            className="fixed top-0 left-0 z-1050 w-full h-full overflow-x-hidden overflow-y-auto"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            {/* // modal */}
            <div className="z-100 max-w-screen-sm m-14 mx-auto relative bg-gris_clair p-3 rounded text-vert">
              {/* // modal-header */}
              <div className="flex justify-end">
                {/* // modal-close-button */}
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
              <h1 className="text-center text-h2 p-2">
                Objets - Modification du contenu
              </h1>
              <div>
                <label htmlFor="appartenance">
                  Sous-titre
                  <input
                    id="appartenance"
                    className="m-2 px-2 w-full rounded focus-within:shadow-xl focus:outline-none font-bold text-h2"
                    type="text"
                    value={appartenance}
                    placeholder="sous-titre"
                    onChange={(event) => setAppartenance(event.target.value)}
                  />
                </label>
                <label htmlFor="cible">
                  Ligne
                  <input
                    id="cible"
                    className="m-2 px-2 w-full rounded focus-within:shadow-xl focus:outline-none"
                    type="text"
                    value={info}
                    placeholder="contenu de la ligne"
                    onChange={(event) => setInfo(event.target.value)}
                  />
                </label>
              </div>
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

export default ModalObjets;
