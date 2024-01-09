import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TfiMenu, TfiClose } from "react-icons/tfi";
import Vagas from "../assets/images/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Pesquisar vagas" },
    { path: "/my-job", title: "Vagas" },
    { path: "/salary", title: "Salários" },
    { path: "/post-job", title: "Cadastrar vaga" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <img src={Vagas} alt="ODS Empregos" width={50} />
          <span>ODS Empregos</span>
        </a>

        {/** nav items for large devices */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/** signup and login btn */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">
            Entrar
          </Link>
          <Link
            to="/sign-up"
            className="py-2 px-5 border rounded bg-blue text-white"
          >
            Cadastrar
          </Link>
        </div>

        {/** mobile menu */}

        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <TfiClose className="w-4 h-4 text-primary" />
            ) : (
              <TfiMenu className="w-4 h-4 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/** navItems for mobile */}
      <div
        className={`px-4 py-10 rounded-sm bg-indigo-800 ${
          isMenuOpen ? "" : "hidden"
        } `}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/login" className="text-white py-1">
              Entrar
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
