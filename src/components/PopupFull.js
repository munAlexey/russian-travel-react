import React from "react";
import closeBtn from "../img/close-btn.svg";
import closeBtnFull from "../img/768-1024/close-btn.svg";

function PopupFull(props) {
  const { isOpen, card, isClose } = props;

  return (
    <div className={`popup ${isOpen ? "popup_open" : ""}`}>
      <div className="popup__block">
        <button
          type="button"
          className="button popup__close-btn"
          onClick={isClose}
        >
          <picture>
            <source srcSet={closeBtnFull} media="(min-width: 768px)" />
            <img
              src={closeBtn}
              className="pop-up__card-close-btn"
              alt="закрыть"
            />
          </picture>
        </button>
        <img className="popup__img" src={card.link} alt={card.name} />
      </div>
    </div>
  );
}

export default PopupFull;
