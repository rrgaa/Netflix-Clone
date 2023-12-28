import React from "react";
import Background from "../assets/Images/background.jpg";

function Banner() {
  return (
    <div className="/banner" id="banner">
      <div className="banner__background">
        <img
          className="banner__backgroundImage"
          src={Background}
          alt="Latar Belakang"
        />
      </div>
      <div className="banner__content">
        <h1>Selamat Datang di Netflix</h1>
        <p>Ribuan film & acara TV yang bisa ditonton kapan saja.</p>
        <div className="banner__buttons">
          <button className="banner__button">Mulai</button>
          <button className="banner__button">Lanjutkan Menonton</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
