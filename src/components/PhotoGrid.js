import React from "react";
import { photoGrid } from "./utils/constants";
import Photo from "./Photo";
import { CurrentLangContext } from "../context/CurrentLangContext";

function PhotoGrid(props) {
  const {onCardClick} = props;
  const lang = React.useContext(CurrentLangContext);
  return lang ? (
    <section className="photo-grid">
      <ul className="photo-grid__list">
        {photoGrid.map((photo) => {
          return <Photo key={photo.id} photo={photo} isOpen={onCardClick}/>;
        })}
      </ul>
    </section>
  ) : (
    <section className="photo-grid">
      <ul className="photo-grid__list">
        {photoGrid.map((photo) => {
          return <Photo key={photo.id} photo={photo} isOpen={onCardClick}/>;
        })}
      </ul>
    </section>
  );
}

export default PhotoGrid;
