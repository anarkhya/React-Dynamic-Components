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
    <div className="flex flex-col lg:text-lg items-center p-4 bg-secondary text-white">
      <Headline1 data={data} />
      <form className="flex flex-col items-center gap-3 py-4">
        <label htmlFor="firstName">
          <input
            className="hover:border-b-accent px-2 py-1 bg-dark border-b-2 border-b-primary rounded lg:w-96 outline-none"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
          />
        </label>
        <label htmlFor="lastName">
          <input
            className="hover:border-b-accent px-2 py-1 bg-dark border-b-2 border-b-primary rounded lg:w-96 outline-none"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
        </label>
        <label htmlFor="Email">
          <input
            className=" hover:border-b-accent px-2 py-1 bg-dark border-b-2 border-b-primary rounded lg:w-96 outline-none"
            type="text"
            name="Email"
            id="Email"
            placeholder="Email"
          />
        </label>
        <textarea
          className="bg-clip-padding hover:border-b-accent px-2 py-1 bg-dark border-b-2 border-b-primary rounded lg:w-96 outline-none"
          rows="3"
          placeholder="Message"
        />
        <button
          type="submit"
          className="transition ease-in rounded-md rounded-bl-3xl rounded-tr-3xl border-white border-2 hover:border-accent hover:bg-accent -skew-y-6 active:translate-y-1 hover:shadow-accent/40 shadow-white hover:shadow-[8px_8px_40px_5px] bg-secondary text-white px-6 py-2 "
        >
          {data.buttonText}
        </button>
      </form>
    </div>
  );
};

export default Formulaire;
