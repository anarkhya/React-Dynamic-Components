import React from "react";

/**
 *
 *
 * @param {*} { data }
 * @return {*} data se trouvant dans data/Contact
 * Formulaire de contact
 */
const Formulaire = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-4 mx-auto lg:text-lg bg-secondary text-dark">
      <h1 className="text-center uppercase text-h1">{data.titre}</h1>
      <div className="flex flex-col mb-4 text-secondary ">
        <form className="flex flex-col items-center my-5">
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
            className="transition hover:bg-accent hover:text-secondary hover:border-accent active:-skew-y-6 active:translate-y-1 shadow-dark/30 shadow-[10px_10px_0px_0px] active:shadow-dark/20 bg-secondary border-dark border-2 text-dark px-6 py-2 mt-5"
            type="button"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulaire;
