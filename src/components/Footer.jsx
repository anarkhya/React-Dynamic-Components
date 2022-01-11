import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import FooterData from "../data/FooterData";
import ButtonAdmin from "./ButtonAdmin";

const Footer = () => {
  return (
    <div className={FooterData.cls}>
      <div className="flex justify-end pr-4 pt-4">
        <ButtonAdmin />
      </div>
      <div className="py-4 flex flex-col items-center md:flex-row md:flex-wrap md:gap-0 text-center text-vert gap-5">
        <div className="md:order-1 md:basis-1/3 list-none">
          <h2 className="text-h2 font-bold">{FooterData.titleContact}</h2>
          {FooterData.contact.map((contact) => (
            <li key={contact.id}>{contact.contact}</li>
          ))}
        </div>
        <div className="md:order-3 md:basis-1/3 list-none">
          <h2 className="text-h2 font-bold">{FooterData.titleHoraires}</h2>
          {FooterData.horaires.map((horaire) => (
            <li key={horaire.id}>{horaire.horaire}</li>
          ))}
        </div>
        <p className="md:order-2 md:basis-1/3 flex justify-center items-center gap-1">
          <LocationMarkerIcon className="h-5" />
          {FooterData.address}
        </p>
        <p className="md:order-last md:basis-full text-mini">
          {FooterData.copyright}
        </p>
      </div>
    </div>
  );
};

export default Footer;
