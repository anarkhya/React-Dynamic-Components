/* eslint-disable indent */
import React from "react";
import ReactDOM from "react-dom";
// import Concept from "../../data/Concept";

const ModalNewComponent = ({ isShowing, hide }) => {
  const getModal = () => {
    if (isShowing) {
      return ReactDOM.createPortal(
        <>
          {/* // modal-overlay */}
          <div className="fixed top-0 left-0 w-screen h-screen z-1040 bg-secondary opacity-70" />
          {/* // modal-wrapper */}
          <div
            className="fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto z-1050"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            {/* // modal */}
            <div className="relative max-w-screen-sm p-3 mx-auto rounded z-100 m-14 bg-primary text-secondary">
              {/* // modal-header */}
              <div className="flex justify-end">
                {/* // modal-close-button */}
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
              <h1 className="p-2 text-center text-h2">
                Nouveau Bloc - Modification du contenu
              </h1>
              {/* // style section interactions utilisateur */}
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
export default ModalNewComponent;
