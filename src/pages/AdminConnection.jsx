import React from "react";
import { Link } from "react-router-dom";

const AdminConnection = () => {
  return (
    <div className="flex flex-col items-center gap-3 p-4 mx-auto lg:text-lg bg-secondary text-dark">
      <h1 className="mt-5 text-center uppercase text-h1">Authentification</h1>
      <div className="mt-2 mb-4 text-secondary">
        <Link to="/testtest">
          <form className="flex flex-col items-center">
            <label htmlFor="identifiant">
              Identifiant
              <input
                className="flex items-center px-2 mt-2 mb-3 border-none rounded lg:w-96 focus:outline-none"
                type="text"
                id="nom"
                placeholder="Identifiant"
              />
            </label>
            <label htmlFor="mdp">
              Mot de passe
              <input
                className="flex items-center px-2 mb-3 border-none rounded lg:w-96 focus:outline-none"
                type="text"
                id="mdp"
                placeholder="Mot de passe"
              />
            </label>
            <button
              className="transition hover:bg-accent hover:text-secondary hover:border-accent active:-skew-y-6 active:translate-y-1 shadow-dark/30 shadow-[10px_10px_0px_0px] active:shadow-dark/20 bg-secondary border-dark border-2 text-dark px-6 py-2 mt-7"
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
