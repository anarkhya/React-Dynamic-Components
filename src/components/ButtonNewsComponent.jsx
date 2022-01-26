import React, { useState } from "react";
import ModalArticle from "./modals/ModalArticle";
import ModalAbonnement from "./modals/ModalAbonnement";
import ModalArticleImage from "./modals/ModalArticleImage";
import ModalContact from "./modals/ModalContact";
import ModalEchanges from "./modals/ModalEchanges";
import ModalFooter from "./modals/ModalFooter";
import ModalHeader from "./modals/ModalHeader";
import ModalObjets from "./modals/ModalObjets";
import ModalProduct from "./modals/ModalProduct";
import ModalClient from "./modals/ModalClient";
import ModalConcept from "./modals/ModalConcept";
import ModalNewComponent from "./modals/ModalNewComponent";

const ButtonNewsComponent = () => {
  const [modal, setModal] = useState("");

  const toggle = () => {
    setModal("");
  };
  const getModal = (type) => {
    console.log("getModal");
    const myModal = {
      article: <ModalArticle isShowing hide={toggle} data={{}} />,
      abonnement: (
        <ModalAbonnement
          isShowing
          hide={toggle}
          data={{
            titre: "",
            details: [{ detail: "", description1: "", description2: "" }],
            description: "",
          }}
        />
      ),
      articleImage: <ModalArticleImage isShowing hide={toggle} data={{}} />,
      contact: <ModalContact isShowing hide={toggle} data={{}} />,
      echanges: <ModalEchanges isShowing hide={toggle} data={{}} />,
      footer: <ModalFooter isShowing hide={toggle} data={{}} />,
      header: <ModalHeader isShowing hide={toggle} data={{}} />,
      objets: <ModalObjets isShowing hide={toggle} data={{}} />,
      product: <ModalProduct isShowing hide={toggle} data={{}} />,
      client: <ModalClient isShowing hide={toggle} data={{}} />,
      concept: <ModalConcept isShowing hide={toggle} data={{}} />,
      newComponent: <ModalNewComponent isShowing hide={toggle} data={{}} />,
    };
    setModal(myModal[type]);
  };
  return (
    <div className="mx-auto my-2 flex items-center place-content-center bg-vert rounded w-8 h-8">
      <select onChange={(e) => getModal(e.target.value)}>
        <option value="article">article</option>
        <option value="abonnement">abonnement</option>
        <option value="product">product</option>
      </select>
      {modal}
    </div>
  );
};

export default ButtonNewsComponent;
