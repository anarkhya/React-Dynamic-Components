/* eslint-disable indent */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import FooterData from "../../data/FooterData";

const ModalFooter = ({ isShowing, hide }) => {
  const [mail, setMail] = useState(FooterData.contact[0].mail);
  const [phone, setPhone] = useState(FooterData.contact[1].phone);
  const [adresse, setAdresse] = useState(FooterData.adresse);
  const [horaires1, setHoraires1] = useState(FooterData.horaires[0].horaire);
  const [horaires2, setHoraires2] = useState(FooterData.horaires[1].horaire);
  const [horaires3, setHoraires3] = useState(FooterData.horaires[2].horaire);
  const [horaires4, setHoraires4] = useState(FooterData.horaires[3].horaire);
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
                Footer - Modification du contenu
              </h1>
              <div>
                <label htmlFor="contact">
                  Mail
                  <input
                    id="contact"
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                    type="text"
                    value={mail}
                    onChange={(event) => setMail(event.target.value)}
                  />
                </label>
                <label htmlFor="contact">
                  Téléphone
                  <input
                    id="contact"
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                    type="text"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </label>
                <label htmlFor="address">
                  Adresse
                  <input
                    id="address"
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                    type="text"
                    value={adresse}
                    onChange={(event) => setAdresse(event.target.value)}
                  />
                </label>
                <label htmlFor="horaires1">
                  Jour 1
                  <input
                    id="horaires1"
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                    type="text"
                    value={horaires1}
                    onChange={(event) => setHoraires1(event.target.value)}
                  />
                </label>
                <label htmlFor="horaires2">
                  Jour 2
                  <input
                    id="horaires2"
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                    type="text"
                    value={horaires2}
                    onChange={(event) => setHoraires2(event.target.value)}
                  />
                </label>
                <label htmlFor="horaires">
                  Jour 3
                  <input
                    id="horaires"
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                    type="text"
                    value={horaires3}
                    onChange={(event) => setHoraires3(event.target.value)}
                  />
                </label>
                <label htmlFor="horaires">
                  Jour 4
                  <input
                    id="horaires"
                    className="transition hover:shadow-xl focus-within:shadow-xl focus:outline-none rounded my-2 px-2 w-full"
                    type="text"
                    value={horaires4}
                    onChange={(event) => setHoraires4(event.target.value)}
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
