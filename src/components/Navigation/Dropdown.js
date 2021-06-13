import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { MenuItems } from './MenuItems';
// import routes from "../../routes";

// import styles from "./Dropdown.module.css";
import "./Dropdown.css";
import "./Burger.css";

export const MenuItems = [
  {
    title: "Marketing",
    path: "/marketing",
    cName: "dropdown-link",
  },
  {
    title: "Consulting",
    path: "/consulting",
    cName: "dropdown-link",
  },
  {
    title: "Design",
    path: "/design",
    cName: "dropdown-link",
  },
  {
    title: "Development",
    path: "/development",
    cName: "dropdown-link",
  },
];

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
        {MenuItems.map((item, index) => {
          // {routes.route.routes.map((item, index) => {

          // console.log("item:", item);
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;

// export const MenuItems = [
//     {
//       title: 'Marketing',
//       path: '/marketing',
//       cName: 'dropdown-link'
//     },
//     {
//       title: 'Consulting',
//       path: '/consulting',
//       cName: 'dropdown-link'
//     },
//     {
//       title: 'Design',
//       path: '/design',
//       cName: 'dropdown-link'
//     },
//     {
//       title: 'Development',
//       path: '/development',
//       cName: 'dropdown-link'
//     }
//   ];
