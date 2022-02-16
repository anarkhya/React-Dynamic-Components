import React, { useState } from "react";
import ReactDOM from "react-dom";
import FooterData from "../../data/FooterData";

const ModalFooter = ({ isShowing, hide }) => {
  /** state qui est en lien avec la data de footer pour l'afficher */
  const [mail, setMail] = useState(FooterData.contact[0].mail);
  const [phone, setPhone] = useState(FooterData.contact[1].phone);
  const [adresse, setAdresse] = useState(FooterData.adresse);
  const [copyright, setCopyright] = useState(FooterData.copyright);

  const [dataHoraires, setDataHoraires] = useState(FooterData.horaires);

  const updateDataHoraires = (value, type, obj) => {
    const newData = [...dataHoraires];
    const index = newData.indexOf(obj);
    newData[index][type] = value;
    setDataHoraires(newData);
  };

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
    /** isShowing affiche le modal */
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
              <h1 className="p-2 text-center text-h2">
                Pied de page - Modification du contenu
              </h1>

              {dataHoraires.map((item) => {
                return (
                  <div>
                    <label htmlFor="1" className="">
                      horaire du jour
                      <input
                        id=""
                        className="w-full px-2 mt-2 mb-4 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                        type="text"
                        value={item.horaire}
                        placeholder=""
                        onChange={(event) =>
                          updateDataHoraires(
                            event.target.value,
                            "horaire",
                            item
                          )
                        }
                      />
                    </label>

                    <section className="flex flex-row-reverse gap-4 px-2 my-2">
                      <button
                        className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2  "
                        type="button"
                      >
                        Supprimer
                      </button>
                      <button
                        className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-secondary/40 shadow-[10px_10px_0px_0px] shadow-secondary/50 bg-secondary text-white px-6 py-2  "
                        type="button"
                      >
                        Valider
                      </button>
                    </section>
                  </div>
                );
              })}

              <div>
                <label htmlFor="contact">
                  Mail
                  <input
                    id="contact"
                    className="w-full px-2 my-2 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                    type="text"
                    value={mail}
                    onChange={(event) => setMail(event.target.value)}
                  />
                </label>
                <section className="flex flex-row-reverse gap-4 px-2 my-2">
                  <button
                    className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2  "
                    type="button"
                  >
                    Supprimer
                  </button>
                  <button
                    className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-secondary/40 shadow-[10px_10px_0px_0px] shadow-secondary/50 bg-secondary text-white px-6 py-2  "
                    type="button"
                  >
                    Valider
                  </button>
                </section>
                <label htmlFor="contact">
                  Téléphone
                  <input
                    id="contact"
                    className="w-full px-2 my-2 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                    type="text"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </label>
                <section className="flex flex-row-reverse gap-4 px-2 my-2">
                  <button
                    className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2  "
                    type="button"
                  >
                    Supprimer
                  </button>
                  <button
                    className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-secondary/40 shadow-[10px_10px_0px_0px] shadow-secondary/50 bg-secondary text-white px-6 py-2  "
                    type="button"
                  >
                    Valider
                  </button>
                </section>
                <label htmlFor="address">
                  Adresse
                  <input
                    id="address"
                    className="w-full px-2 my-2 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                    type="text"
                    value={adresse}
                    onChange={(event) => setAdresse(event.target.value)}
                  />
                </label>
                <section className="flex flex-row-reverse gap-4 px-2 my-2">
                  <button
                    className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2  "
                    type="button"
                  >
                    Supprimer
                  </button>
                  <button
                    className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-secondary/40 shadow-[10px_10px_0px_0px] shadow-secondary/50 bg-secondary text-white px-6 py-2  "
                    type="button"
                  >
                    Valider
                  </button>
                </section>
                <label htmlFor="1">
                  Copyright
                  <input
                    id="1"
                    className="w-full px-2 my-2 transition rounded hover:shadow-xl focus-within:shadow-xl focus:outline-none"
                    type="text"
                    value={copyright}
                    onChange={(event) => setCopyright(event.target.value)}
                  />
                </label>
                <section className="flex flex-row-reverse gap-4 px-2 my-2">
                  <button
                    className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-[#813]/40 shadow-[10px_10px_0px_0px] shadow-[#813]/50 bg-[#813] text-white px-6 py-2  "
                    type="button"
                  >
                    Supprimer
                  </button>
                  <button
                    className="transition hover:bg-accent hover:text-secondary active:-skew-y-6 active:translate-y-1 active:shadow-secondary/40 shadow-[10px_10px_0px_0px] shadow-secondary/50 bg-secondary text-white px-6 py-2  "
                    type="button"
                  >
                    Valider
                  </button>
                </section>
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
