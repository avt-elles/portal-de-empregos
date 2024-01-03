import React, { useState } from "react";
import Vagas from "../assets/images/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <nav>
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <img src={Vagas} alt="Portal de Empregos" width={50} />
          <span>Portal de Empregos</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
