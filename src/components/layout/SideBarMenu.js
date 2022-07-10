import { Transition } from "@headlessui/react";
import { CaretRight } from "phosphor-react";
import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

const SideBarMenu = ({ name, icon, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <li
      className="flex flex-col px-6 py-3 my-2 overflow-y-hidden transition-all duration-150 ease-in-out h-auto cursor-pointer hover:bg-slate-300"
      onClick={() => setOpen(!open)}
    >
      <div className="flex">
        <div className="flex w-64">
          {icon}
          <span className="ml-2">{name}</span>
        </div>
        <div className="flex-auto w-5">
          <CaretRight
            weight="bold"
            className={`text-gray-500 transition-transform duration-100 ease-in-out ${
              open ? "rotate-90" : "rotate-0"
            }`}
          />
        </div>
      </div>
      <Transition
        as={Fragment}
        show={open}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <ul className="flex flex-col pl-5 mt-2 text-gray-500">
          {items.map(({ name, link }, index) => (
            <Link
              to={link}
              className="pl-3 py-2 my-1 rounded-md transition-colors duration-150 ease-in-out hover:text-black hover:bg-gray-100 hover:backdrop-blur-sm hover:backdrop-opacity-20"
              key={index}
            >
              {name}
            </Link>
          ))}
        </ul>
      </Transition>
    </li>
  );
};

export default SideBarMenu;
