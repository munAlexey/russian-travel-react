import React from "react";

function Places(props) {
  const {title, link, text, titleLink, img1280, img768, img} = props;

  return (
    <li className="places__item">
      <h2 className="section-title places__title">{title}</h2>
      <div className="places__block-links">
        <p className="places__url">url</p>
        <a href={link} className="places__link link">
          {titleLink}
        </a>
      </div>
      <picture>
        <source 
        media="(min-width: 1280px)"
        srcset={img1280}
        className="places__img"/>
        <source 
        media="(min-width: 768px)"
        srcset={img768}
        className="places__img"/>
        <img src={img} alt={title} className="places__img"/>
        </picture>
        <div className="places__text">
        <p className="section-subtitle places__subtitle">
          {text}
        </p>
        </div>
      </li>
  )
}

export default Places;