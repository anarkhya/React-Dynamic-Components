import React from "react";
import ButtonAdmin from "./ButtonAdmin";

const Contact = ({ data }) => {
  return (
    <div className="">
      <div className={data.classContainer}>
        <div className="flex justify-end">
          <ButtonAdmin />
        </div>
        <h1 className={data.classTitle}>{data.title}</h1>
        <div className={data.classInfosList}>
          <div className={data.classInfosListRow}>
            <img
              className={data.classImg}
              src={data.srcPhoneIcon}
              alt={data.alt}
            />
            <p>{data.phone}</p>
          </div>
          <div className={data.classInfosListRow}>
            <img
              className={data.classImg}
              src={data.srcMailIcon}
              alt={data.alt}
            />
            <p>{data.mail}</p>
          </div>
          <div className={data.classInfosListRow}>
            <img
              className={data.classImg}
              src={data.srcInstaIcon}
              alt={data.alt}
            />
            <p>{data.insta}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
