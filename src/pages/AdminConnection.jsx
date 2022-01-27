import React from "react";
import { Link } from "react-router-dom";

const AdminConnection = () => {
  return (
    <div className="p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-vert text-blanc">
      <h1 className="uppercase text-h1 text-center mt-5">Authentification</h1>
      <div className="text-vert mb-4 mt-2">
        <Link to="/testtest">
          <form className="flex flex-col items-center">
            <label htmlFor="identifiant">
              Identifiant
              <input
                className="mb-3 px-2 mt-2 border-none md:w-96 flex items-center rounded focus:outline-none"
                type="text"
                id="nom"
                placeholder="Identifiant"
              />
            </label>
            <label htmlFor="mdp">
              Mot de passe
              <input
                className="mb-3 px-2 border-none md:w-96 flex items-center rounded focus:outline-none"
                type="text"
                id="mdp"
                placeholder="Mot de passe"
              />
            </label>

            <button
              className="transition hover:bg-rose hover:text-vert hover:border-rose active:-skew-y-6 active:translate-y-1 shadow-blanc/30 shadow-[10px_10px_0px_0px] active:shadow-blanc/20 bg-vert border-blanc border-2 text-blanc px-6 py-2 mt-7"
              type="button"
            >
              Connexion
            </button>
          </form>
        </Link>
      </div>
    </div>
  );
};

export default AdminConnection;
