import React from "react";
import { roadMap } from "./utils/constants";
import { CurrentLangContext } from "../context/CurrentLangContext";

function Lead() {
  const lang = React.useContext(CurrentLangContext);

  return lang ? (
    <section className="lead">
      <h1 className="lead__title">Путешествия по России</h1>
      <p className="lead__subtitle">
        Настоящая страна не в выпусках новостей, а здесь.
      </p>
      <picture>
        <source
          srcSet={roadMap[2].link1280}
          media="(min-width: 1024px)"
          className="lead__img"
        />
        <source
          srcSet={roadMap[1].link768}
          media="(min-width: 768px)"
          className="lead__img"
        />
        <img
          src={roadMap[0].link}
          alt={roadMap[0].name}
          className="lead__img"
        />
      </picture>
      <p className="lead__caption">ваша полка — верхняя</p>
    </section>
  ) : (
    <section className="lead">
      <h1 className="lead__title">Traveling in Russia</h1>
      <p className="lead__subtitle">
        The real country is not in the news, but here.
      </p>
      <picture>
        <source
          srcSet={roadMap[2].link1280}
          media="(min-width: 1024px)"
          className="lead__img"
        />
        <source
          srcSet={roadMap[1].link768}
          media="(min-width: 768px)"
          className="lead__img"
        />
        <img
          src={roadMap[0].link}
          alt={roadMap[0].name}
          className="lead__img"
        />
      </picture>
      <p className="lead__caption">your shelf is top</p>
    </section>
  );
}

export default Lead;
