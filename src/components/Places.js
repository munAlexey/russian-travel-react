import React from "react";
import { CurrentLangContext } from "../context/CurrentLangContext";
import { places } from "./utils/constants";
import { placesEn } from "./utils/constants";
import Place from "./Place";

function Places() {
  const lang = React.useContext(CurrentLangContext);

  return lang ? (
  <section className="places">
        <ul className="places__list">
          {places.map((place) => {
            return (
              <Place
                key={place.id}
                title={place.title}
                link={place.link}
                titleLink={place.titleLink}
                text={place.text}
                img={place.imgLink}
                img768={place.imgLink768}
                img1280={place.imgLink1280}
              ></Place>
            );
          })}
        </ul>
      </section>
  ) : (
    <section className="places">
        <ul className="places__list">
          {placesEn.map((place) => {
            return (
              <Place
                key={place.id}
                title={place.title}
                link={place.link}
                titleLink={place.titleLink}
                text={place.text}
                img={place.imgLink}
                img768={place.imgLink768}
                img1280={place.imgLink1280}
              ></Place>
            );
          })}
        </ul>
      </section>
  )
}

export default Places;