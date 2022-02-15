import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import HeaderData from "../data/HeaderData";
import Logo from "./Logo";
import ButtonAdmin from "./ButtonAdmin";

/**
 * NavBar version desktop et mobile
 *
 * @return {*}
 * Importation de Disclosure pour Ouvrir/fermer le burger en responsive
 * Ternaire pour passer en responsive
 * Map pour afficher tous les menus
 * Bouton d'admin joint
 */
const Header = () => {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 rounded-bl-[100%] rounded-br-[20%] shadow-lg shadow-dark/50 bg-dark"
    >
      {({ open }) => (
        <>
          <div className="">
            <div className="flex justify-end hidden">
              <ButtonAdmin type="header" HeaderData={HeaderData} />
            </div>
            <div className="relative flex items-center justify-between p-2">
              {/* positionnement burger */}
              <div className="absolute inset-y-0 right-0 sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-secondary focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="h-12">
                <Link to={HeaderData.menus[0].to}>
                  <Logo data={HeaderData.logo} />
                </Link>
              </div>
              <div className="hidden md:block md:ml-6">
                <div className="flex gap-4 row-reverse">
                  {HeaderData.menus.map((item) => (
                    <Link to={item.to} key={item.name}>
                      <p className="leading-8 transition hover:underline hover:underline-offset-2 hover:decoration-accent hover:decoration-2 active:translate-y-1 text-h2 font-headlines text-secondary drop-shadow-[2px_0px_3px_rgba(0,0,0,0.6)]">
                        {item.name}
                      </p>
                    </Link>
                  ))}
                  <div className="flex gap-4">
                    {HeaderData.networks.map((network) => (
                      <span key={network.alt}>
                        <a href={network.url} target="_blank" rel="noreferrer">
                          <img
                            className="inline h-6 transition border-b-2 rounded hover:outline-offset-2 hover:outline hover:outline-2 hover:outline-accent active:translate-y-1 drop-shadow-[2px_0px_3px_rgba(0,0,0,0.6)]"
                            src={network.src}
                            alt={network.alt}
                          />
                        </a>
                        {network.text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col h-screen gap-6 p-4 pt-8 bg-dark">
              {HeaderData.menus.map((item) => (
                <Link to={item.to} key={item.name}>
                  <Disclosure.Button className="leading-8 text-secondary text-h2 font-headlines active:underline active:underline-offset-2 active:decoration-accent active:decoration-2">
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
