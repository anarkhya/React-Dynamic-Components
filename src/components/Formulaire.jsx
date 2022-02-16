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
      <form className="flex flex-col items-center gap-1 py-4 text-secondary">
        <label htmlFor="nom">
          <input
            className="px-2 mb-3 border-none rounded lg:w-96 focus:outline-none"
            type="text"
            name="Nom"
            id="nom"
            placeholder="Nom"
          />
        </label>
        <label htmlFor="Prénom">
          <input
            className="px-2 mb-3 border-none rounded lg:w-96 focus:outline-none"
            type="text"
            name="Prénom"
            id="Prénom"
            placeholder="Prénom"
          />
        </label>
        <label htmlFor="Email">
          <input
            className="px-2 mb-3 border-none rounded lg:w-96 focus:outline-none"
            type="text"
            name="Email"
            id="Email"
            placeholder="Email"
          />
        </label>
        <textarea
          className="block px-2 m-0 mb-3 rounded  lg:w-96 bg-clip-padding focus:outline-none"
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
