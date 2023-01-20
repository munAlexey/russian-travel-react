import React from "react";
import logo from "../img/320-768/logo.svg";

function Header(props) {
  const {isSwitch, onChangeRu, onChangeEn} = props;
  return (
    <header className="header">
      <div className="header__block">
        <a href="./img/logo.svg" className="header__logo">
          <img src={logo} alt="логотип" className="header__img"/>
        </a>
        <ul className="header__lang">
          <li>
              <button className={`header__link ${isSwitch ? "header__link_active" : ""}` } onClick={onChangeRu} >Ru</button>
          </li>
          <li>
              <button className={`header__link ${isSwitch ? "" : "header__link_active"}`} onClick={onChangeEn} >En</button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;