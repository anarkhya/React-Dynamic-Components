import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import HeaderData from "../data/HeaderData";
import Logo from "./Logo";
import ButtonAdmin from "./ButtonAdmin";

/**
 *
 * @return {*}
 * Disclosure: handles burger display behavior
 * Logo, Links and social icons mapping
 */
const Header = () => {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 shadow-lg shadow-dark/50 bg-dark"
    >
      {({ open }) => (
        <>
          <div className="flex justify-end hidden">
            <ButtonAdmin type="header" HeaderData={HeaderData} />
          </div>
          <div className="relative flex flex-row items-center px-2 h-10 lg:h-12">
            {/* /////////////////////////////////////                           burger */}
            <div className="absolute inset-y-1 right-1 lg:hidden">
              <Disclosure.Button className=" text-secondary focus:outline-none">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block w-8 h-8" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block w-8 h-8" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            {/* /////////////////////////////////////////                       logo */}
            <div className="mb-4 basis-1/4">
              <Link to={HeaderData.menus[0].to}>
                <Logo data={HeaderData.logo} />
              </Link>
            </div>
            {/* /////////////////////////////////////////                       links */}
            <div className="hidden lg:flex basis-1/2 gap-4 justify-center">
              {HeaderData.menus.map((item) => (
                <Link to={item.to} key={item.name}>
                  <p className="leading-8 transition hover:underline hover:underline-offset-2 hover:decoration-accent hover:decoration-2 active:translate-y-1 text-h2 font-headlines text-secondary ">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
            {/* /////////////////////////////////////////                       social icons */}
            <div className="flex w-full mr-10 lg:mr-0 gap-2 lg:basis-1/4 justify-end">
              {HeaderData.networks.map((network) => (
                <div key={network.alt}>
                  <a href={network.url} target="_blank" rel="noreferrer">
                    <img
                      className="inline h-6 transition border-b-2 rounded hover:outline-offset-2 hover:outline hover:outline-2 hover:outline-accent active:translate-y-1"
                      src={network.src}
                      alt={network.alt}
                    />
                  </a>
                  {network.text}
                </div>
              ))}
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
