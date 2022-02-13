import React from "react";

const Headline1 = ({ data }) => {
  return (
    <div>
      <h1 className="uppercase text-h1 font-headlines -skew-y-3 -skew-x-6 leading-tight">
        {data.titre}
      </h1>
    </div>
  );
};

export default Headline1;
