import React from "react";
import { CurrentLangContext } from "../context/CurrentLangContext";

function Intro() {
  const lang = React.useContext( CurrentLangContext);

  return lang ? (
    <section className="intro">
        <h2 className="section-title intro__title">Чего мы там не видели?</h2>
        <p className="section-subtitle intro__subtitle">
          По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только
          36% планируют провести отпуск в родной стране. Мол, чего мы тут, дома,
          не видели? На самом деле, Россия — это целая вселенная с ласковым
          морем юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё
          увидеть все эти красоты можно без миллионов на счету, загранпаспорта и
          многочасовых перелетов. Как, например, Вера Башмакова — смелая молодая
          мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и
          проехала 20 тысяч километров по родной стране. Мы выбрали и описали
          некоторые интересные места, достойные вашего отпуска.
        </p>
        <ul className="intro__list">
          <li className="intro__item">
            Часовых поясов <span className="intro__span-accent">11</span>
          </li>
          <li className="intro__item">
            Объектов природного наследия ЮНЕСКО{" "}
            <span className="intro__span-accent">12</span>
          </li>
          <li className="intro__item">
            Объектов культурного наследия ЮНЕСКО{" "}
            <span className="intro__span-accent">16</span>
          </li>
          <li className="intro__item">
            Природных заповедников{" "}
            <span className="intro__span-accent">105</span>
          </li>
          <li className="intro__item">
            Аэропортов <span className="intro__span-accent">241</span>
          </li>
        </ul>
      </section>
  ) : (
    <section className="intro">
        <h2 className="section-title intro__title">
          What didn't we see there?
        </h2>
        <p className="section-subtitle intro__subtitle">
          According to VTsIOM polls, 95% of Russians dream of going somewhere,
          but only 36% plan to spend their holidays in their native country.
          Like, what have we not seen here at home? In fact, Russia is a whole
          universe with the gentle sea of the south, the dense forests of the
          Sayans and the harsh ice of the Putorana Plateau. And you can also see
          all these beauties without millions in your account, a passport and
          many hours of flights. Like, for example, Vera Bashmakova, a brave
          young mother who took three children in her arms, put them in her Lada
          and drove 20 thousand kilometers across her native country. We have
          selected and described some interesting places worthy of your
          vacation.
        </p>
        <ul className="intro__list">
          <li className="intro__item">
            Time zones <span className="intro__span-accent">11</span>
          </li>
          <li className="intro__item">
            UNESCO natural heritage sites{" "}
            <span className="intro__span-accent">12</span>
          </li>
          <li className="intro__item">
            UNESCO cultural heritage sites{" "}
            <span className="intro__span-accent">16</span>
          </li>
          <li className="intro__item">
            Nature reserves <span className="intro__span-accent">105</span>
          </li>
          <li className="intro__item">
            Airports <span className="intro__span-accent">241</span>
          </li>
        </ul>
      </section>
  )
}

export default Intro;