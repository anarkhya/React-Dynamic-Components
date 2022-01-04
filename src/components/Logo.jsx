import React from "react";

const Logo = ({ data }) => {
  return (
    <div className={data.cls}>
      {data.url ? (
        <button type="submit" onClick={() => console.log(data.url)}>
          <img src={data.src} alt={data.alt} />
        </button>
      ) : (
        <img src={data.src} alt={data.alt} />
      )}
    </div>
  );
};

export default Logo;
