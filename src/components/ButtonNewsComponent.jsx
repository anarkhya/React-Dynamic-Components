import React, { useState } from "react";
import ModalArticle from "./modals/ModalArticle";
import ModalAbonnement from "./modals/ModalAbonnement";
import ModalArticleImage from "./modals/ModalArticleImage";
import ModalContact from "./modals/ModalContact";
import ModalEchanges from "./modals/ModalEchanges";
// import ModalFooter from "./modals/ModalFooter";
// import ModalHeader from "./modals/ModalHeader";
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
      contact: (
        <ModalContact
          isShowing
          hide={toggle}
          data={{
            reseaux: [{ src: "", alt: "", url: "" }],
          }}
        />
      ),
      echanges: (
        <ModalEchanges
          isShowing
          hide={toggle}
          data={{
            gommettes: [{ src: "", alt: "" }],
          }}
        />
      ),
      // footer: <ModalFooter isShowing hide={toggle} data={{}} />,
      // header: (
      //   <ModalHeader
      //     isShowing
      //     hide={toggle}
      //     HeaderData={{ menus: [{ to: "", name: "" }] }}
      //   />
      // ),
      objets: (
        <ModalObjets
          isShowing
          hide={toggle}
          data={{ categorie: [{ appartenance: "", cible: "" }] }}
        />
      ),
      product: (
        <ModalProduct
          isShowing
          hide={toggle}
          data={{ presentation: [{ info: "", src: "" }] }}
        />
      ),
      client: <ModalClient isShowing hide={toggle} data={{}} />,
      concept: <ModalConcept isShowing hide={toggle} data={{}} />,
      newComponent: <ModalNewComponent isShowing hide={toggle} data={{}} />,
    };
    setModal(myModal[type]);
  };
  return (
    <div className="flex justify-center">
      <select
        className="transition mt-4 text-secondary rounded h-8 border-[#0ff] border-2 cursor-pointer px-2 active:translate-y-1"
        onChange={(e) => getModal(e.target.value)}
      >
        <option value="abonnement">Abonnement</option>
        <option value="article">Article</option>
        <option value="articleImage">Article avec Image</option>
        <option value="client">Client</option>
        <option value="concept">Concept</option>
        <option value="contact">Contact</option>
        <option value="echanges">Echanges</option>
        <option value="product">Produits échangeables</option>
        <option value="objets">Objets</option>
      </select>
      {modal}
    </div>
  );
};

export default ButtonNewsComponent;
