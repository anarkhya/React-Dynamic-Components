import React from "react";

const Logo = ({ data }) => {
  return (
    <div className={data.cls}>
      <img src={data.src} alt={data.alt} />
    </div>
  );
};

export default Logo;
