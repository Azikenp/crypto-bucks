import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

function Logo() {
  return (
    <Link
      to="/"
      className="absolute top-[1.5rem] left-[1.5rem] [text-decoration: none] flex items-center"
    >
      <img src={logoSvg} alt="CryptoZazuu" />
      <span className="text-lg text-cyan">Crypto Zazuu</span>
    </Link>
  );
}

export default Logo;
