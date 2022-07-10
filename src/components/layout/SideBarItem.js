import React from 'react'
import { Link } from 'react-router-dom';

const SideBarItem = ({ name, icon, link }) => {
  return (
    <li className="flex align-center px-6 py-3 my-2 cursor-pointer h-12 transition-colors duration-200 ease-in-out hover:bg-slate-200">
      {icon}
      <Link to={link} className="ml-2">
        {name}
      </Link>
    </li>
  );
}

export default SideBarItem