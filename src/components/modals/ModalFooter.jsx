/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalFooter = ({ isShowing, hide }) => {
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [horaires, setHoraires] = useState("");
  // const [details, setDetails] = useState([]);

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
              <div className="grid place-content-center">
                <h1 className="mb-5 text-center font-semibold underline underline-offset-4">
                  Modification :
                </h1>
                <label htmlFor="contact">
                  Contact :
                  <input
                    id="contact"
                    className="mb-3 ml-3 mr-3 border-2 border-vert"
                    type="text"
                    value={contact}
                    onChange={(event) => setContact(event.target.value)}
                  />
                </label>
                <label htmlFor="address">
                  Adresse :
                  <input
                    id="address"
                    className="mb-3 ml-3 mr-3 border-2 border-vert"
                    type="text"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </label>
                <label htmlFor="horaires">
                  Horaire :
                  <input
                    id="horaires"
                    className="mb-3 ml-3 mr-3 border-2 border-vert"
                    type="text"
                    value={horaires}
                    onChange={(event) => setHoraires(event.target.value)}
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

export default ModalFooter;
