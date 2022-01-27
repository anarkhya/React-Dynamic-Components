import React, { useState } from "react";
import ModalArticle from "./modals/ModalArticle";

const Import = ({ type, data }) => {
  const [modal, setModal] = useState("");

  const toggle = () => {
    setModal("");
  };
  const getModal = () => {
    const myModal = {
      article: <ModalArticle isShowing hide={toggle} data={data} />,
    };
    setModal(myModal[type]);
  };

  return (
    <div>
      <div>{modal}</div>
      <button type="submit" onClick={() => getModal()}>
        d
      </button>
    </div>
  );
};

export default Import;
