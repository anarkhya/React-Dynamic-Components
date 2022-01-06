import React from "react";

const Contact = ({ data }) => {
  return (
    <div className="">
      <div className="">
        <p>{data.tiitle}</p>
        <p>{data.name}</p>
        <p>{data.phone}</p>
        <p>{data.mail}</p>
        <p>{data.site}</p>
        <p>{data.insta}</p>
        <p>{data.adresse}</p>
      </div>
    </div>
  );
};

export default Contact;
