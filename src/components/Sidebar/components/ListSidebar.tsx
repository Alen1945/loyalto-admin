import React from "react";
import CustomStyle from "../../assets/styles/layout.module.sass";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import clsx from "clsx";

const ListSidebar: React.FC<{ to: string; textList: string; icon: string }> = ({
  to,
  textList,
  icon,
}) => {
  const location = useLocation();
  return (
    <li className={clsx("nav-item ", location.pathname === to && "menu-open")}>
      <Link
        to={to}
        className={clsx("nav-link", location.pathname === to && "active")}
      >
        <i className={`nav-icon fas ${icon}`}></i>
        <p>{textList}</p>
      </Link>
    </li>
  );
};

export default ListSidebar;
