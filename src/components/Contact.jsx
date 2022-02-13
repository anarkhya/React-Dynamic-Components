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
        className="p-4 md:text-lg gap-3 mx-auto  flex items-center flex-col bg-secondary text-dark"
        style={{ backgroundImage: "url(/assets/images/grid.png)" }}
      >
        <div className="text-right w-full">
          <ButtonAdmin type="contact" data={data} />
        </div>
        <Headline1 data={data} />
        <p className="font-light">{data.nom}</p>
        <div className="flex justify-between flex-col md:flex-row bg-primary rounded text-secondary py-2 pr-4">
          <div className="flex pl-4">
            <img
              className="mr-1 w-6"
              src={data.srcPhoneIcon}
              alt="phone icon"
            />
            <p>{data.telephone}</p>
          </div>
          <div className="flex pl-4">
            <img className="mr-1 w-6" src={data.srcMailIcon} alt="mail icon" />
            <p>{data.mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
