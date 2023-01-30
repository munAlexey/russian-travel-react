import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React, { useState } from "react";
import { CurrentLangContext } from "../context/CurrentLangContext";
import PopupFull from "./PopupFull";

function App() {
  const [langSwitch, setLangSwitch] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectCard, setSelectCard] = useState({});
  const handleChangeLang = function () {
    setLangSwitch(true);
  };
  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        handleClose();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  const changeLangEn = function () {
    setLangSwitch(false);
  };

  function handleOpen(cardInfo) {
    setSelectCard({
      link: cardInfo.link768,
      name: cardInfo.name
    })
    setIsOpen(true)
  }
  function handleClose() {
    setIsOpen(false)
  }

  return (
    <div className="App">
      <CurrentLangContext.Provider value={langSwitch}>
        <div className="page">
          <Header onChangeRu={handleChangeLang} onChangeEn={changeLangEn} />
          <Main onOpenFullImg={handleOpen} />
          <Footer />
          <PopupFull isOpen={isOpen} card={selectCard} isClose={handleClose}/>
        </div>
      </CurrentLangContext.Provider>
    </div>
  );
}

export default App;
