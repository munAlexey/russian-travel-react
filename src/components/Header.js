import React from "react";
import logo from "../img/320-768/logo.svg";
import { CurrentLangContext } from "../context/CurrentLangContext";

function Header(props) {
  const {onChangeRu, onChangeEn} = props;
  const lang = React.useContext(CurrentLangContext);
  return (
    <header className="header">
      <div className="header__block">
        <a href="./img/logo.svg" className="header__logo">
          <img src={logo} alt="логотип" className="header__img"/>
        </a>
        <ul className="header__lang">
          <li>
              <button className={`header__link ${lang ? "header__link_active" : ""}` } onClick={onChangeRu} >Ru</button>
          </li>
          <li>
              <button className={`header__link ${lang ? "" : "header__link_active"}`} onClick={onChangeEn} >En</button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;