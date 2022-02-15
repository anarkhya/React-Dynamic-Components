import React from "react";

const Headline1 = ({ data }) => {
  return (
    <div>
      <h1 className="leading-tight uppercase -skew-x-6 -skew-y-3 text-h1 font-headlines">
        {data.title}
      </h1>
    </div>
  );
};

export default Headline1;
