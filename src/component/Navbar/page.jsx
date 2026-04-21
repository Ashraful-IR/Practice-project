import Link from "next/link";
import React from "react";

const NavPage = () => {
  const links = (
    <>
      <Link href="/Home" key="home">
        Home
      </Link>
      
      <Link href="/about" key="about">
        About
      </Link>
      
      <Link href="/contact" key="contact">
        Contact
      </Link>
      <Link href="/Users" key="users">
        Users
      </Link>

      
      
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black "
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-between items-center gap-5 menu menu-horizontal px-1 text-black font-bold">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavPage;
