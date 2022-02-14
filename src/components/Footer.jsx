import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import FooterData from "../data/FooterData";
import ButtonAdmin from "./ButtonAdmin";

/**
 *
 *
 * @return {*}
 * data se trouvant dans data/FooterData
 * Map sur les horaires
 * Bouton Admin joint
 */
const Footer = () => {
  return (
    <footer className={FooterData.cls}>
      <div className="flex justify-end pt-2 pr-2">
        <ButtonAdmin type="footer" />
      </div>
      <section className="flex flex-col items-center gap-5 md:flex-row md:place-content-around md:gap-0">
        <div className="list-none md:flex md:flex-col md:place-content-center md:order-last">
          <h2 className="text-h2 font-headlines">{FooterData.titreHoraires}</h2>
          {FooterData.horaires.map((horaire) => (
            <li key={horaire.id}>{horaire.horaire}</li>
          ))}
        </div>
        <div className="md:flex md:items-center">
          <LocationMarkerIcon className="h-5" />
          <a
            className="underline transition hover:no-underline active:translate-y-1"
            href="https://www.google.com/maps?ll=47.204088,-1.547592&z=14&t=m&hl=fr&gl=FR&mapclient=embed&q=23+Rue+Petite+Biesse+44200+Nantes"
            target="_blank"
            rel="noreferrer"
          >
            {FooterData.adresse}
          </a>
        </div>
      </section>

      <section className="flex flex-col items-center text-mini ">
        <p>{FooterData.copyright}</p>
        <p>
          Développé par
          <a
            className="px-1 underline transition hover:no-underline active:translate-y-1"
            href="https://wikipedia.fr"
            target="_blank"
            rel="noreferrer"
          >
            hello world
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
