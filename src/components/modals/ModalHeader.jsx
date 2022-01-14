/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalHeader = ({ isShowing, hide }) => {
  const [titre, setTitre] = useState("");
  const [menus, setMenus] = useState([]);

  const onChangeDetails = (value, detail) => {
    const newDetails = [...menus];
    const index = newDetails.indexOf(detail);
    newDetails[index] = value;
    setMenus(newDetails);
  };

  const addDetails = () => {
    const newDetails = [...menus];
    newDetails.push("");
    setMenus(newDetails);
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
                <label htmlFor="menu">
                  Noms:
                  <input
                    id="titre"
                    className="mb-3 ml-3 mr-3 border-2 border-vert"
                    type="text"
                    value={titre}
                    onChange={(event) => setTitre(event.target.value)}
                  />
                </label>
                <button type="button" onClick={() => addDetails()}>
                  Noms
                </button>
                {menus.map((menu) => {
                  return (
                    <label htmlFor="menu">
                      Nom
                      <input
                        type="text"
                        value={menu?.menu}
                        onChange={(event) =>
                          onChangeDetails(event.target.value, menu)
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

export default ModalHeader;
