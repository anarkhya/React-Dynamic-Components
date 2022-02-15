import React from "react";

const ButtonMore = ({ data }) => {
  return (
    <div>
      <button
        type="submit"
        className="transition ease-in rounded-md rounded-bl-3xl rounded-tr-3xl border-white border-2 hover:border-accent hover:bg-accent -skew-y-6 active:translate-y-1 hover:shadow-accent/40 shadow-white hover:shadow-[8px_8px_40px_5px] bg-secondary text-white px-6 py-2 "
      >
        {data.buttonText}
      </button>
    </div>
  );
};

export default ButtonMore;
