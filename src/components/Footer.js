import React from "react";

function Footer() {
  return (
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
      <p className="footer__copy">&copy; 2020. Мун Алексей</p>
    </footer>
  )
}

export default Footer;