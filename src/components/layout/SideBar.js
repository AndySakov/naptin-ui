import React from "react";
import { IconContext, House, Books, ChalkboardTeacher, VideoCamera, Buildings, UserCircle, UsersFour } from "phosphor-react";
import SideBarMenu from "./SideBarMenu";
import SideBarItem from "./SideBarItem";
import logo from '../../assets/images/naptin-logo.svg'

const SideBar = () => {
  const items = [
    {
      name: "Dashboard",
      icon: <House />,
      menu: false,
      link: "/",
      items: [],
    },
    {
      name: "Courses",
      icon: <Books />,
      menu: true,
      link: "#",
      items: [
        { name: "Created Courses", link: "/" },
        { name: "Assigned Courses", link: "/" },
        { name: "Approved Courses", link: "/" },
      ],
    },
    {
      name: "Classroom",
      icon: <ChalkboardTeacher />,
      menu: true,
      link: "#",
      items: [
        { name: "Assignments", link: "/" },
        { name: "Quizzes", link: "/" },
      ],
    },
    {
      name: "Collaboration",
      icon: <VideoCamera />,
      menu: false,
      link: "",
      items: [],
    },
    {
      name: "School",
      icon: <Buildings />,
      menu: true,
      link: "#",
      items: [
        { name: "Announcements", link: "/" },
        { name: "Calendar", link: "/" },
      ],
    },
    {
      name: "Account",
      icon: <UserCircle />,
      menu: true,
      link: "#",
      items: [
        { name: "Profile & Settings", link: "/" },
        { name: "Tickets", link: "/" },
      ],
    },
    {
      name: "Community",
      icon: <UsersFour />,
      menu: true,
      link: "#",
      items: [
        { name: "Forum", link: "/" },
      ],
    },
  ];
  return (
    <aside className="flex flex-col w-1/5 bg-white max-h-full min-h-screen">
      <a href="/" className="mt-10 ml-5">
        <img src={logo} alt="Naptin Logo" />
      </a>

      <IconContext.Provider value={{ size: "1.5rem", weight: "duotone" }}>
        <ul className="mt-12">
          {items.map(({ name, icon, menu, link, items }, index) =>
            menu ? (
              <SideBarMenu name={name} icon={icon} items={items} key={index} />
            ) : (
              <SideBarItem name={name} icon={icon} link={link} key={index} />
            )
          )}
        </ul>
      </IconContext.Provider>
    </aside>
  );
};

export default SideBar;
