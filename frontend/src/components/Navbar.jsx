import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <img src={Vagas} alt="Portal de Empregos" width={50} />
          <span>Portal de Empregos</span>
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
      </nav>
    </header>
  );
};

export default Navbar;
