import React from "react";

const Button = ({ data }) => {
  return (
    <div>
      <button
        type="button"
        className="transition font-headlines ease-in rounded-md rounded-bl-3xl rounded-tr-3xl border-primary border-2 hover:border-accent hover:bg-accent -skew-y-6 active:translate-y-1 hover:shadow-accent/60 shadow-ternary/60 shadow-[8px_8px_40px_5px] hover:shadow-[8px_8px_40px_5px] bg-ternary text-white px-6 py-2"
      >
        {data.buttonText}
      </button>
    </div>
  );
};

export default Button;
