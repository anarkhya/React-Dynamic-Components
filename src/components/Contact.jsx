import React from "react";
import ButtonAdmin from "./ButtonAdmin";
// import iconPhone from "../../public/assets/icones/icon_phone.svg";

const Contact = ({ data }) => {
  return (
    <div className="">
      <div
        className={data.cls}
        style={{ backgroundImage: "url(/assets/images/grid.png)" }}
      >
        <div className="text-right w-full">
          <ButtonAdmin type="contact" />
        </div>
        <h1 className="text-center text-h1 font-light">{data.title}</h1>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex pl-4">
            <img
              className="mr-1 w-6"
              src={data.srcPhoneIcon}
              alt="phone icon"
            />
            <p>{data.phone}</p>
          </div>
          <div className="flex pl-4">
            <img className="mr-1 w-6" src={data.srcMailIcon} alt="mail icon" />
            <p>{data.mail}</p>
          </div>
          <div className="flex pl-4">
            <img
              className="mr-1 w-6"
              src={data.srcInstaIcon}
              alt="instagram icon"
            />
            <p>{data.insta}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
