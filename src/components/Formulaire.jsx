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
    <div className="p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-vert text-blanc">
      <h1 className="uppercase text-h1 text-center">{data.titre}</h1>
      <div className="text-vert flex flex-col mb-4 ">
        <form className="flex flex-col items-center my-5">
          <label htmlFor="nom">
            <input
              className="mb-3 px-2 border-none md:w-96 rounded-lg focus:outline-none"
              type="text"
              name="Nom"
              id="nom"
              placeholder="Nom"
            />
          </label>
          <label htmlFor="Prénom">
            <input
              className="mb-3 px-2 border-none md:w-96 rounded-lg focus:outline-none"
              type="text"
              name="Prénom"
              id="Prénom"
              placeholder="Prénom"
            />
          </label>
          <label htmlFor="Email">
            <input
              className="mb-3 px-2 border-none md:w-96 rounded-lg focus:outline-none"
              type="text"
              name="Email"
              id="Email"
              placeholder="Email"
            />
          </label>
          <textarea
            className="
            mb-3 px-2 block md:w-96 bg-clip-padding m-0 rounded-lg focus:outline-none"
            rows="3"
            placeholder="Message"
          />
          <button
            className="transition hover:bg-rose hover:text-vert hover:border-rose active:-skew-y-6 active:translate-y-1 shadow-blanc/30 shadow-[10px_10px_0px_0px] active:shadow-blanc/20 bg-vert border-blanc border-2 text-blanc px-6 py-2 text-normal mt-5"
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
