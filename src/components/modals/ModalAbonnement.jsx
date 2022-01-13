/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalAbonnement = ({ isShowing, hide }) => {
  const [titre, setTitre] = useState("");
  const [info, setInfo] = useState("");
  const [details, setDetails] = useState([]);

  const onChangeDetails = (value, detail) => {
    const newDetails = [...details];
    const index = newDetails.indexOf(detail);
    newDetails[index] = value;
    setDetails(newDetails);
  };

  const addDetails = () => {
    const newDetails = [...details];
    newDetails.push("");
    setDetails(newDetails);
  };
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
            <div className="z-100 max-w-screen-sm m-14 mx-auto relative bg-blanc p-3 rounded text-vert">
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
              <div>
                <label htmlFor="titre">
                  Titre
                  <input
                    id="titre"
                    type="text"
                    value={titre}
                    onChange={(event) => setTitre(event.target.value)}
                  />
                </label>
                <label htmlFor="info">
                  Info supplémentaire
                  <input
                    id="info"
                    type="text"
                    value={info}
                    onChange={(event) => setInfo(event.target.value)}
                  />
                </label>
                <button type="submit" onClick={() => addDetails()}>
                  Ajouter un détail
                </button>
                {details.map((detail) => {
                  return (
                    <label htmlFor="detail">
                      detail
                      <input
                        type="text"
                        value={detail?.detail}
                        onChange={(event) =>
                          onChangeDetails(event.target.value, detail)
                        }
                      />
                    </label>
                  );
                })}
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

export default ModalAbonnement;
