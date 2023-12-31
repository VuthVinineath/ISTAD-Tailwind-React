import { Navbar } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const [navbar, setNavbar] = useState([
    {
      title: "Home",
      url: "/home",
      active: true,
    },
    {
      title: "About",
      url: "/about",
      active: false,
    },
    {
      title: "Service",
      url: "/service",
      active: false,
    },
    {
      title: "Contact",
      url: "/contact",
      active: false,
    },
  ]);

  const handleClick = (item) => {
    setNavbar((previousValue) => {
      return previousValue.map((value) => {
        // if (value.title === item.title) {
        //   return {
        //     ...value,
        //     active: true,
        //   };
        // } else {
        //   return {
        //     ...value,
        //     active: false,
        //   };
        // }
        return {
          ...value,
          active: value.title === item.title,
        };
      });
    });
  };

  return (
    <Navbar className="bg-gradient-to-r from-indigo-800">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="./src/assets/react.svg"
          className="h-6 mr-3 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navbar.map((item, index) => {
          return (
            <Navbar.Link
              onClick={() => {
                handleClick(item);
              }}
              key={index}
              as={Link}
              to={item.url}
              active={item.active}
            >
              {item.title}
            </Navbar.Link>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
