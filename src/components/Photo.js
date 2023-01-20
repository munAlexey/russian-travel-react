import React from "react";

function Photo(props) {
  const {photo} = props;

  return (
    <li className="photo-grid__item">
      <picture>
        <source 
        srcset={photo.link1280} 
        media="(min-width: 1280px)"
        className="photo-grid__img"/>
        <source 
        srcset={photo.link768}
        media="(min-width: 768px)"
        className="photo-grid__img"/>
        <img src={photo.link}
        alt="поезд" className="photo-grid__img"/>
      </picture>
    </li>
  )
}

export default Photo;