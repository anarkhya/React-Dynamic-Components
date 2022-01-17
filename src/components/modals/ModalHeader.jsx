import React, { useState } from "react";
import ReactDOM from "react-dom";
import HeaderData from "../../data/HeaderData";

const ModalHeader = ({ isShowing, hide }) => {
  const [pageUn, setPageUn] = useState("");
  const [pageDeux, setPageDeux] = useState("");
  const [pageTrois, setPageTrois] = useState("");
  const [pageQuatre, setPageQuatre] = useState("");
  const [pageCinq, setPageCinq] = useState("");

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
              <div className="flex justify-end ">
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
                En tête - Modification du contenu
              </h1>

              {HeaderData.menus.map((menu) => {
                <div>{menu.to}</div>;
                return (
                  <div>
                    <label htmlFor="nom" className="">
                      Nom de page - 1
                      <input
                        id="nom"
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={pageUn}
                        placeholder=""
                        onChange={(event) => setPageUn(event.target.value)}
                      />
                    </label>
                    <label htmlFor="nom" className="">
                      Nom de page - 2
                      <input
                        id="nom"
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={pageDeux}
                        placeholder=""
                        onChange={(event) => setPageDeux(event.target.value)}
                      />
                    </label>
                    <label htmlFor="nom" className="">
                      Nom de page - 3
                      <input
                        id="nom"
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={pageTrois}
                        placeholder=""
                        onChange={(event) => setPageTrois(event.target.value)}
                      />
                    </label>
                    <label htmlFor="nom" className="">
                      Nom de page - 4
                      <input
                        id="nom"
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={pageQuatre}
                        placeholder=""
                        onChange={(event) => setPageQuatre(event.target.value)}
                      />
                    </label>
                    <label htmlFor="nom" className="">
                      Nom de page - 5
                      <input
                        id="nom"
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={pageCinq}
                        placeholder=""
                        onChange={(event) => setPageCinq(event.target.value)}
                      />
                    </label>
                  </div>
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

export default ModalHeader;
