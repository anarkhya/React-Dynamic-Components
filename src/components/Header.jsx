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
      className="sticky top-0 z-50 border-b-2 shadow-xl border-b-secondary bg-dark shadow-secondary/50"
    >
      {({ open }) => (
        <>
          <div className="px-4">
            <div className="flex justify-end">
              <ButtonAdmin type="header" HeaderData={HeaderData} />
            </div>
            <div className="relative flex items-center justify-between pb-2">
              {/* positionnement burger */}
              <div className="absolute inset-y-0 right-0 sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center flex-1 sm:justify-between">
                <Link to={HeaderData.menus[0].to}>
                  <Logo data={HeaderData.logo} />
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex gap-8">
                    {HeaderData.menus.map((item) => (
                      <Link to={item.to}>
                        <p
                          key={item.name}
                          className="leading-8 transition ease-in active:translate-y-1 hover:text-accent text-h2 font-headlines text-secondary"
                        >
                          {item.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col gap-8 p-4 bg-secondary">
              {HeaderData.menus.map((item) => (
                <Link to={item.to}>
                  <Disclosure.Button
                    key={item.name}
                    className="text-h2 text-dark"
                  >
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
