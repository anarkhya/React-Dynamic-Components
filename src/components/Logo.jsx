import React from "react";

const Logo = ({ data }) => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <img
        className="block lg:hidden h-8 w-auto"
        src={data.src}
        alt={data.alt}
      />
      <img
        className="hidden lg:block h-8 w-auto"
        src={data.src}
        alt={data.alt}
      />
    </div>
  );
};

export default Logo;
