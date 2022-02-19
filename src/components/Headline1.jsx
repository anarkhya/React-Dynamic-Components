import React from "react";

const Headline1 = ({ data }) => {
  return (
    <div>
      <h1 className="leading-tight uppercase -skew-x-6 -skew-y-3 text-h1 font-headlines">
        {data.title}
      </h1>
      <p className="leading-tight text-right uppercase -skew-x-6 -skew-y-3 font-headlines text-dark">
        {data.titleSub}
      </p>
    </div>
  );
};

export default Headline1;
