import React from "react";

const Footer = ({ data }) => {
  return (
    <div className={data.cls}>
      <div className="container">
        <p>{data.address}</p>
        <h2>{data.title}</h2>
        <div className="horaires">
          {data.horaires.map((horaire) => (
            <li key={horaire.id}>{horaire.horaire}</li>
          ))}
        </div>
        <span className="mini-text">{data.copyright}</span>
      </div>
    </div>
  );
};

export default Footer;
