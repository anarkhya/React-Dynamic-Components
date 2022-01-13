import React from "react";

const Formulaire = ({ data }) => {
  return (
    <div className="p-4 md:text-lg gap-3 mx-auto flex flex items-center flex-col bg-vert text-blanc">
      <div className="text-h1 text-center">{data.titre}</div>
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
            className="mt-4 rounded-full bg-transparent border-2 border-solid border-white text-white px-6 py-2"
            type="button"
            id="button"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulaire;
