import React from "react";

function Photo(props) {
  const {photo, isOpen} = props;
  function handleCardClick() {
    isOpen(photo);
  }

  return (
    <li className="photo-grid__item">
      <picture>
        <source 
        srcSet={photo.link1280} 
        media="(min-width: 1280px)"
        className="photo-grid__img"/>
        <source 
        srcSet={photo.link768}
        media="(min-width: 768px)"
        className="photo-grid__img"/>
        <img src={photo.link}
        alt="поезд" className="photo-grid__img" onClick={handleCardClick}/>
      </picture>
    </li>
  )
}

export default Photo;