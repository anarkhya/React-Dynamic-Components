import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

const Footer = ({ data }) => {
  return (
    <div className={data.cls}>
      <div className="flex flex-col items-center text-center text-teal-900 gap-5">
        <div className="list-none">
          <h2 className="text-lg font-bold">{data.titleContact}</h2>
          {data.contact.map((contact) => (
            <li key={contact.id}>{contact.contact}</li>
          ))}
        </div>
        <div className="list-none">
          <h2 className="text-lg font-bold">{data.titleHoraires}</h2>
          {data.horaires.map((horaire) => (
            <li key={horaire.id}>{horaire.horaire}</li>
          ))}
        </div>
        <p className="flex gap-1">
          <LocationMarkerIcon className="h-5" />
          {data.address}
        </p>
        <p className="text-xs">{data.copyright}</p>
      </div>
    </div>
  );
};

export default Footer;
