import React from "react";
import { CurrentLangContext } from "../context/CurrentLangContext";

function Cover() {
  const lang = React.useContext(CurrentLangContext);

  return lang ? (
    <section className="cover">
        <a
          className="cover__link"
          href="https://stampsy.com/na-elektrichkakh-do-baikala"
        >
          <div className="cover__block cover__block_hover">
            <h2 className="section-title cover__title">
              До Байкала «на собаках»
            </h2>
            <p className="cover__subtitle">
              По мотивам учебной темы о Транссибе — путешествие от столицы до
              Байкала на электричках.
            </p>
          </div>
        </a>
      </section>
  ) : (
    <section className="cover">
        <a
          className="cover__link"
          href="https://stampsy.com/na-elektrichkakh-do-baikala"
        >
          <div className="cover__block cover__block_hover">
            <h2 className="section-title cover__title">To Baikal "on dogs"</h2>
            <p className="cover__subtitle">
              Based on the educational theme about the Transsib - travel from
              the capital to Baikal by electric trains.
            </p>
          </div>
        </a>
      </section>
  )
}

export default Cover;