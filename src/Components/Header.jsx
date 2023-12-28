import React from "react";
import { Link } from "react-router-dom";
import netflix from "../assets/Images/netflix.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={netflix} alt="Netflix Logo" />
      </div>
      <div className="header__menu">
        <a href="/" className="header__menuLink">
          Beranda
        </a>
        <Link to="/film" className="header__menuLink">
          Film
        </Link>
        <Link to="/favorite" className="header__menuLink">
          Favorite
        </Link>
      </div>
      <div className="header__user">
        <img src="/path-to-avatar.png" alt="Profil Pengguna" />
      </div>
    </header>
  );
}

export default Header;
