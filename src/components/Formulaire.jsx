import React from "react";
import Headline1 from "./Headline1";

/**
 *
 *
 * @param {*} { data }
 * @return {*} data se trouvant dans data/Contact
 * Formulaire de contact
 */
const Formulaire = ({ data }) => {
  return (
    <div className="flex flex-col items-center p-4 text-secondary lg:text-lg">
      <Headline1 data={data} />
      <form className="flex flex-col items-center gap-3 py-4">
        <label htmlFor="firstName">
          <input
            className="px-2 py-1 border-b-2 rounded outline-none hover:border-b-accent bg-dark border-b-ternary lg:w-96"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
          />
        </label>
        <label htmlFor="lastName">
          <input
            className="px-2 py-1 border-b-2 rounded outline-none hover:border-b-accent bg-dark border-b-ternary lg:w-96"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
        </label>
        <label htmlFor="Email">
          <input
            className="px-2 py-1 border-b-2 rounded outline-none hover:border-b-accent bg-dark border-b-ternary lg:w-96"
            type="text"
            name="Email"
            id="Email"
            placeholder="Email"
          />
        </label>
        <textarea
          className="px-2 py-1 border-b-2 rounded outline-none bg-clip-padding hover:border-b-accent bg-dark border-b-ternary lg:w-96"
          rows="3"
          placeholder="Message"
        />
        <button
          type="submit"
          className="transition font-headlines ease-in rounded-md rounded-bl-3xl rounded-tr-3xl border-white border-2 hover:border-accent hover:bg-accent -skew-y-6 active:translate-y-1 hover:shadow-accent/60 shadow-ternary/60 shadow-[8px_8px_40px_5px] hover:shadow-[8px_8px_40px_5px] bg-ternary text-white px-6 py-2"
        >
          {data.buttonText}
        </button>
      </form>
    </div>
  );
};

export default Formulaire;
