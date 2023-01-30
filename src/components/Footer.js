import React from "react";
import { CurrentLangContext } from "../context/CurrentLangContext";

function Footer() {
  const lang = React.useContext(CurrentLangContext);
  return lang ? (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item">
            <a className="footer__link link" href="https://yandex.ru/maps">
              Карты
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link link" href="https://yandex.ru/pogoda">
              Погода
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link link" href="https://rasp.yandex.ru">
              Расписание
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link link" href="https://calendar.yandex.ru">
              Календарь
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link link" href="https://travel.yandex.ru">
              Путешествия
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer__copy">&copy; {new Date().getFullYear()}. Мун Алексей</p>
    </footer>
  ) : (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item">
            <a className="footer__link link" href="https://yandex.ru/maps">
              Maps
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link link" href="https://yandex.ru/pogoda">
              Weather
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link link" href="https://rasp.yandex.ru">
              Timetable
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link link" href="https://calendar.yandex.ru">
              Calendar
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link link" href="https://travel.yandex.ru">
              Travel
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer__copy">&copy; {new Date().getFullYear()}. Mun Aleksey</p>
    </footer>
  );
}

export default Footer;
