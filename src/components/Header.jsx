import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import HeaderData from "../data/HeaderData";
import Logo from "./Logo";
import ButtonAdmin from "./ButtonAdmin";

const Header = () => {
  return (
    <Disclosure
      as="nav"
      className="border-b-2 border-b-neutral-200 sticky top-0 bg-white shadow-md shadow-vert/20"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pr-4">
            <div className="flex justify-end mt-3">
              <ButtonAdmin type="header" />
            </div>
            <div className="relative flex items-center justify-between h-36">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-vert focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-between">
                <Link to={HeaderData.menu[0].to}>
                  <Logo data={HeaderData.logo} />
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-14">
                    {HeaderData.menu.map((item) => (
                      <Link to={item.to}>
                        <a
                          key={item.name}
                          href={item.to}
                          className="font-bold text-vert hover:text-rose"
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="bg-vert flex flex-col px-2 pt-2 pb-3 space-y-1">
              {HeaderData.menu.map((item) => (
                <Link to={item.to}>
                  <Disclosure.Button
                    key={item.name}
                    className="font-bold text-blanc"
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
