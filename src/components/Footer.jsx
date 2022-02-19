import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import FooterData from "../data/FooterData";
import ButtonAdmin from "./ButtonAdmin";

/**
 * @return {*}
 * data se trouvant dans data/FooterData
 */
const Footer = () => {
  return (
    <footer className={FooterData.cls}>
      <div className="flex justify-end pt-2 pr-2">
        <ButtonAdmin type="footer" />
      </div>
      <section className="flex flex-col items-center gap-5 lg:flex-row lg:place-content-around lg:gap-0">
        <div className="list-none lg:flex lg:flex-col lg:place-content-center lg:order-last">
          <h2 className="text-h2 font-headlines">{FooterData.titreHoraires}</h2>
          {FooterData.horaires.map((horaire) => (
            <li key={horaire.id}>{horaire.horaire}</li>
          ))}
        </div>
        <div className="lg:flex lg:items-center">
          <LocationMarkerIcon className="h-5" />
          <a
            className="underline transition underline-offset-2 hover:decoration-accent decoration-1 decoration-ternary active:translate-y-1"
            href="https://www.google.com/maps?ll=47.204088,-1.547592&z=14&t=m&hl=fr&gl=FR&mapclient=embed&q=23+Rue+Petite+Biesse+44200+Nantes"
            target="_blank"
            rel="noreferrer"
          >
            {FooterData.adresse}
          </a>
        </div>
      </section>

      <section className="flex flex-col items-center lg:flex-row lg:justify-between lg:p-2 text-mini ">
        <p className="opacity-50">{FooterData.copyright}</p>
        <p>
          Made with 🕹️ by
          <a
            className="px-1 underline transition underline-offset-2 hover:decoration-accent decoration-1 decoration-ternary active:translate-y-1"
            href={FooterData.developerUrl}
            target="_blank"
            rel="noreferrer"
          >
            {FooterData.developer}
          </a>
        </p>
        <p className="opacity-50">
          <Link to="/mentions-legales" target="_blank" rel="noreferrer">
            Mentions légales
          </Link>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
