import React from "react";
import ButtonAdmin from "./ButtonAdmin";
import Headline1 from "./Headline1";

/**
 *
 *
 * @param {*} { data }
 * @return {*} les différents moyens de contact, n° de tel, reseaux sociaux, mail etc
 * Bouton admin joint
 */
const Contact = ({ data }) => {
  return (
    <div>
      <div
        className="flex flex-col items-center gap-3 p-4 mx-auto md:text-lg bg-secondary text-dark"
        style={{ backgroundImage: "url(/assets/images/grid.png)" }}
      >
        <div className="w-full text-right">
          <ButtonAdmin type="contact" data={data} />
        </div>
        <Headline1 data={data} />
        <p className="font-light">{data.nom}</p>
        <div className="flex flex-col justify-between py-2 pr-4 rounded md:flex-row bg-primary text-secondary">
          <div className="flex pl-4">
            <img
              className="w-6 mr-1"
              src={data.srcPhoneIcon}
              alt="phone icon"
            />
            <p>{data.telephone}</p>
          </div>
          <div className="flex pl-4">
            <img className="w-6 mr-1" src={data.srcMailIcon} alt="mail icon" />
            <p>{data.mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
