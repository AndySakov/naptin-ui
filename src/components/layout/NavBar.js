import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { CaretDown, Door } from "phosphor-react";
import SearchBar from "../SearchBar";
import avatar from "../../assets/images/avatar.svg";

const NavBar = () => {
  return (
    <nav className="flex flex-row-reverse h-16 bg-white mx-8 mb-4 w-auto">
      <Menu as="div" className="">
        <Menu.Button className="flex w-48 h-full bg-white py-3 font-medium text-black hover:bg-gray-100 focus:outline-none">
          <div>
            <img
              src={avatar}
              alt="User Profile"
              className="w-10 h-10 rounded-xl mx-3"
            />
          </div>
          <div className="flex flex-col text-start">
            <span className="text-sm">Adamu G.</span>
            <sub className="text-gray-400 mt-1">Admin</sub>
          </div>
          <CaretDown className="m-auto" aria-hidden="true" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-8 mt-2 w-48 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {" "}
              {/* Wrap sections in this to separate them from others with a line */}
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-secondary-700 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Door className="mr-2 h-5 w-5" aria-hidden="true" />
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <SearchBar placeholder="Search" />
    </nav>
  );
};

export default NavBar;
