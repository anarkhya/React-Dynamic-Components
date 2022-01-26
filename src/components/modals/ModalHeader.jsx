import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react/cjs/react.development";
import HeaderData from "../../data/HeaderData";

const ModalHeader = ({ isShowing, hide }) => {
  /** state qui est en lien avec la data de header pour l'afficher */
  const [data, setData] = useState(HeaderData.menus);

  const updateData = (value, type, obj) => {
    const newData = [...data];
    const index = newData.indexOf(obj);
    newData[index][type] = value;
    setData(newData);
  };
  /** const qui contient le bouton cliquable pour afficher le modal */
  const getModal = () => {
    /** isShowing affiche le modal */
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
                {/* bouton croix pour fermer le modal */}
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
              {/* contenu global du modal */}
              <h1 className="text-center text-h2 p-2">
                En tête - Modification du contenu
              </h1>
              <div>
                <p className="">
                  logo actuel
                  <img
                    className="w-32 mt-2 mb-4"
                    src={HeaderData.logo.src}
                    alt={HeaderData.logo.alt}
                  />
                </p>
                <label htmlFor="nom" className="">
                  nouveau logo
                  <input
                    id="file"
                    className="transition bg-blanc hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                    type="file"
                  />
                </label>
              </div>
              {/* map sur la data de header */}
              {data.map((menu) => {
                <div>{menu.to}</div>;
                return (
                  <div>
                    <label htmlFor="nom" className="">
                      Nom du menu
                      <input
                        id="nom"
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={menu.name}
                        placeholder=""
                        onChange={(event) =>
                          updateData(event.target.value, "name", menu)
                        }
                      />
                    </label>
                    <label htmlFor="nom" className="">
                      lien
                      <input
                        id="nom"
                        className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded mt-2 mb-4 px-2 w-full"
                        type="text"
                        value={menu.to}
                        placeholder=""
                        onChange={(event) =>
                          updateData(event.target.value, "to", menu)
                        }
                      />
                    </label>
                    <section className="flex flex-row-reverse my-2 gap-4 px-2">
                      <button
                        className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2 text-normal"
                        type="button"
                      >
                        Supprimer
                      </button>
                      <button
                        className="transition hover:bg-rose hover:text-vert active:-skew-y-6 active:translate-y-1 active:shadow-vert/40 shadow-[10px_10px_0px_0px] shadow-vert/50 bg-vert text-white px-6 py-2  "
                        type="button"
                      >
                        Valider
                      </button>
                    </section>
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
