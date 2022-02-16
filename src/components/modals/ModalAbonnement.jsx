import React, { useState } from "react";
import ReactDOM from "react-dom";

const ModalAbonnement = ({ isShowing, hide, data }) => {
  /* states affichent data */
  const [cls, setCls] = useState(data.cls);
  const [title, setTitre] = useState(data.title);
  const [details, setDetails] = useState(data.details);
  const [description, setDescription] = useState(data.description);

  /* affiche user input */
  const updateDetail = (value, type, obj) => {
    const newDetails = [...details];
    const index = newDetails.indexOf(obj);
    newDetails[index][type] = value;
    setDetails(newDetails);
  };
  /* suppression ciblée avec le bon index - splice */
  const deleteDetail = (obj) => {
    const newDetails = [...details];
    const index = newDetails.indexOf(obj);
    newDetails.splice(index, 1);
    setDetails(newDetails);
  };
  /* ajoute nouveau bloc - push */
  const addDetails = () => {
    const newDetails = [...details];
    newDetails.push({ detail: "", description1: "", description2: "" });
    setDetails(newDetails);
  };

  const onUpdateComponent = () => {
    console.log({
      title,
      details,
      description,
    });
    hide();
  };
  const onDeleteComponent = () => {
    console.log({
      title,
      details,
      description,
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
                {/* button croix pour fermer le modal */}
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
                Abonnement - Modification du contenu
              </h1>

              {/* ////////////////////////////////      permet modifications éléments actuels par admin */}
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
              <label htmlFor="title" className="">
                title
                <input
                  className="w-full px-2 my-2 font-light uppercase transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none text-h1"
                  id="title"
                  type="text"
                  value={title}
                  placeholder="title"
                  onChange={(event) => setTitre(event.target.value)}
                />
              </label>

              {details.map((item) => {
                return (
                  <div>
                    <label htmlFor="nom" className="">
                      ligne en gras
                      <input
                        id="nom"
                        className="w-full px-2 mt-2 mb-4 font-bold uppercase transition rounded text-h2 hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                        type="text"
                        value={item.detail}
                        placeholder=""
                        onChange={(event) =>
                          updateDetail(event.target.value, "detail", item)
                        }
                      />
                    </label>
                    <label htmlFor="nom" className="">
                      ligne 1
                      <input
                        id="nom"
                        className="w-full px-2 mt-2 mb-4 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                        type="text"
                        value={item.description1}
                        placeholder=""
                        onChange={(event) =>
                          updateDetail(event.target.value, "description1", item)
                        }
                      />
                    </label>
                    <label htmlFor="nom" className="">
                      ligne 2
                      <input
                        id="nom"
                        className="w-full px-2 mt-2 mb-4 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                        type="text"
                        value={item.description2}
                        placeholder=""
                        onChange={(event) =>
                          updateDetail(event.target.value, "description2", item)
                        }
                      />
                    </label>
                    <section className="flex flex-row-reverse gap-4 px-2 my-2">
                      <button
                        className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2 text-normal"
                        type="button"
                        onClick={() => deleteDetail(item)}
                      >
                        Supprimer
                      </button>
                    </section>
                  </div>
                );
              })}
              <section className="flex justify-center gap-4 px-2 my-2 mt-8">
                <button
                  type="submit"
                  className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-secondary/40 shadow-[10px_10px_0px_0px] shadow-secondary/50 bg-secondary text-white px-6 py-2 my-2"
                  onClick={() => addDetails()}
                >
                  Ajouter un autre bloc
                </button>
              </section>
              <label htmlFor="title" className="">
                ligne
                <input
                  className="w-full px-2 my-2 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                  id="title"
                  type="text"
                  value={description}
                  placeholder="title"
                  onChange={(event) => setDescription(event.target.value)}
                />
              </label>
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
