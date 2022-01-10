import React from "react";

const Formulaire = () => {
  return (
    <div className="">
      <div className="text-vert flex flex-col mb-4 items-center bg-gris_clair">
        <form className="flex flex-col my-5">
          <label className="m-2 border-2 border-vert" htmlFor="nom">
            <input
              className=""
              type="text"
              name="Nom"
              id="nom"
              placeholder="Nom"
            />
          </label>
          <label className="m-2 border-vert border-2" htmlFor="Prénom">
            <input type="text" name="Prénom" id="Prénom" placeholder="Prénom" />
          </label>
          <label className="m-2 border-vert border-2" htmlFor="Email">
            <input type="text" name="Email" id="Email" placeholder="Email" />
          </label>
          <label className="m-2 border-vert border-2" htmlFor="Message">
            <input
              type="text"
              name="Message"
              id="Message"
              placeholder="Message"
            />
          </label>
          <button
            className="bg-vert hover:bg-rose hover:text-vert text-vert text-white font-bold m-7 py-2 px-4 rounded-full"
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
