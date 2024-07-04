import React from "react";
import Menu from "./Menu";
const Nav = () => {
  return (
    <div className="navbar bg-base-100 fixed">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <Menu />
    </div>
  );
};

export default Nav;
