import React from "react";
import { Link } from "react-router-dom";
import Menu from "../data/Index";
import Logo from "./Logo";

const Header = ({ data }) => {
  return (
    <div className="header">
      {data.title}
      <Logo data={data.logo} />
      {Menu.map((menu) => (
        <Link to={menu.to}>{menu.name}</Link>
      ))}
    </div>
  );
};

export default Header;
