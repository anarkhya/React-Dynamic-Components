/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalProduct = ({ isShowing, hide }) => {
  const [titre, setTitre] = useState("");
  const [info, setInfo] = useState("");
  const [images, setImages] = useState([]);

  const onChangeDetails = (value, detail) => {
    const newDetails = [...images];
    const index = newDetails.indexOf(detail);
    newDetails[index] = value;
    setImages(newDetails);
  };

  const addDetails = () => {
    const newDetails = [...images];
    newDetails.push("");
    setImages(newDetails);
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
                Product - Modification du contenu
              </h1>
              <label htmlFor="titre">
                Titre
                <input
                  id="titre"
                  className="m-2 px-2 w-full rounded focus-within:shadow-xl focus:outline-none font-light text-h2 border-vert"
                  type="text"
                  value={titre}
                  onChange={(event) => setTitre(event.target.value)}
                />
              </label>
              <label htmlFor="description">
                Description
                <input
                  id="description"
                  className="m-2 px-2 w-full rounded focus-within:shadow-xl focus:outline-none font-light text-h2 border-vert"
                  type="text"
                  value={info}
                  onChange={(event) => setInfo(event.target.value)}
                />
              </label>
              <button type="button" onClick={() => addDetails()}>
                Ajouter une image
              </button>
              {images.map((image) => {
                return (
                  <label htmlFor="image">
                    <input
                      className="m-2"
                      type="img"
                      value={image?.image}
                      onChange={(event) =>
                        onChangeDetails(event.target.value, image)
                      }
                    />
                  </label>
                );
              })}
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
