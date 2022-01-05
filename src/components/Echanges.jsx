import React from "react";

const Echanges = ({ data }) => {
  return (
    <div>
      <h1>{data.titre}</h1>
      <p>{data.paragraphe}</p>
    </div>
  );
};

export default Echanges;
