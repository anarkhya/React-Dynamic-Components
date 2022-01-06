import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import FooterData from "../data/FooterData";

const Footer = () => {
  return (
    <div className={FooterData.cls}>
      <div className="flex flex-col items-center text-center text-vert gap-5">
        <div className="list-none">
          <h2 className="text-h2 font-bold">{FooterData.titleContact}</h2>
          {FooterData.contact.map((contact) => (
            <li key={contact.id}>{contact.contact}</li>
          ))}
        </div>
        <div className="list-none">
          <h2 className="text-h2 font-bold">{FooterData.titleHoraires}</h2>
          {FooterData.horaires.map((horaire) => (
            <li key={horaire.id}>{horaire.horaire}</li>
          ))}
        </div>
        <p className="flex gap-1">
          <LocationMarkerIcon className="h-5" />
          {FooterData.address}
        </p>
        <p className="text-mini">{FooterData.copyright}</p>
      </div>
    </div>
  );
};

export default Footer;
