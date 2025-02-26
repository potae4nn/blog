import React from "react";
const Menu = () => {
  return (
    <>
      {" "}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* menu */}
          <li>
            <a>blog</a>
          </li>
          <li>
            <a>about</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        {/* responsive  */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 -ml-6 shadow"
          >
            {/* menu */}
            <li>
              <a>blog</a>
            </li>
            <li>
              <a>about</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
