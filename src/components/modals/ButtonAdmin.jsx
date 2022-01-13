import React, { useState } from "react";
import ModalArticle from "./ModalArticle";
import ModalAbonnement from "./ModalAbonnement";
import ModalArticleProjet from "./ModalArticleProjet";
import ModalContact from "./ModalContact";
import ModalEchanges from "./ModalEchanges";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import ModalObjets from "./ModalObjets";
import ModalProduct from "./ModalProduct";
import ModalUtilisateur from "./ModalUtilisateur";

const ButtonAdminArticle = ({ type }) => {
  const [modal, setModal] = useState("");

  const toggle = () => {
    setModal("");
  };
  const getModal = () => {
    const myModal = {
      article: <ModalArticle isShowing hide={toggle} />,
      abonnement: <ModalAbonnement isShowing hide={toggle} />,
      articleProjet: <ModalArticleProjet isShowing hide={toggle} />,
      contact: <ModalContact isShowing hide={toggle} />,
      echanges: <ModalEchanges isShowing hide={toggle} />,
      footer: <ModalFooter isShowing hide={toggle} />,
      header: <ModalHeader isShowing hide={toggle} />,
      objets: <ModalObjets isShowing hide={toggle} />,
      product: <ModalProduct isShowing hide={toggle} />,
      utilisateur: <ModalUtilisateur isShowing hide={toggle} />,
    };
    setModal(myModal[type]);
  };

  return (
    <div className="">
      {/* {console.log(modal)} */}
      <button type="submit" onClick={() => getModal()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="#0ff"
        >
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path
            fillRule="evenodd"
            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {modal}
    </div>
  );
};

export default ButtonAdminArticle;
