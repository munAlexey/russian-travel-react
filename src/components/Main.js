import React from "react";
import Photo from "./Photo";
import { photoGrid } from "./utils/constants";
import Places from "./Places";
import { places } from "./utils/constants";
import { placesEn } from "./utils/constants";

function Main(props) {
  const {isSwitch} = props;

  return (
    isSwitch ? (<main className="content">
        <section className="lead">
          <h1 className="lead__title">
            Путешествия
            по России</h1>
          <p className="lead__subtitle">Настоящая страна не в выпусках 
            новостей, а здесь.</p>
          <picture>
            <source 
            srcset="./img/1024-1280/image.jpg"
            media="(min-width: 1024px)" className="lead__img"/>
            <source 
            srcset="./img/768-1024/image.jpg"
            media="(min-width: 768px)" className="lead__img"/>
            <img src="./img/320-768/image.jpg" alt="маршрут" className="lead__img"/>
          </picture>
          <p className="lead__caption">ваша полка — верхняя</p>
        </section>

      <section className="intro">
        <h2 className="section-title intro__title">Чего мы там 
          не видели?</h2>
        <p className="section-subtitle intro__subtitle">
          По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, 
          но только 36% планируют провести отпуск в родной стране. Мол, чего мы тут, дома, не видели? 
          На самом деле, Россия — это целая вселенная с ласковым морем юга, густыми лесами Саян и суровыми льдами плато Путорана. 
          А ещё увидеть все эти красоты можно без миллионов на счету, загранпаспорта и многочасовых перелетов. Как, например, 
          Вера Башмакова — смелая молодая мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» 
          и проехала 20 тысяч километров
          по родной стране. Мы выбрали 
          и описали некоторые интересные места, достойные вашего отпуска.
        </p>
        <ul className="intro__list">
          <li className="intro__item">Часовых поясов <span className="intro__span-accent">11</span></li>
          <li className="intro__item">Объектов природного наследия ЮНЕСКО <span className="intro__span-accent">12</span></li>
          <li className="intro__item">Объектов культурного наследия ЮНЕСКО <span className="intro__span-accent">16</span></li>
          <li className="intro__item">Природных заповедников <span className="intro__span-accent">105</span></li>
          <li className="intro__item">Аэропортов <span className="intro__span-accent">241</span></li>
        </ul>
      </section>

      <section className="photo-grid">
        <ul className="photo-grid__list">
          {photoGrid.map((photo) => {
            return <Photo photo={photo}/>
          })}
        </ul>
      </section>

      <section className="places">
        <ul className="places__list">
          {places.map(place => {
            return (
            <Places 
            title={place.title} 
            link={place.link} 
            titleLink={place.titleLink} 
            text={place.text}
            img={place.imgLink}
            img768={place.imgLink768}
            img1280={place.imgLink1280}>
            </Places>
            )
          })}
        </ul>
      </section>

      <section className="cover">
        <a className="cover__link" href="https://stampsy.com/na-elektrichkakh-do-baikala">
          <div className="cover__block cover__block_hover">
            <h2 className="section-title cover__title">
              До Байкала 
              «на собаках»
            </h2>
            <p className="cover__subtitle">
              По мотивам учебной темы 
              о Транссибе — путешествие 
              от столицы до Байкала на электричках.
            </p>
          </div>
        </a>
      </section>
    </main>) : (<main className="content">
        <section className="lead">
          <h1 className="lead__title">
            Traveling in Russia</h1>
          <p className="lead__subtitle">The real country is not in the news, but here.</p>
          <picture>
            <source 
            srcset="./img/1024-1280/image.jpg"
            media="(min-width: 1024px)" className="lead__img"/>
            <source 
            srcset="./img/768-1024/image.jpg"
            media="(min-width: 768px)" className="lead__img"/>
            <img src="./img/320-768/image.jpg" alt="маршрут" className="lead__img"/>
          </picture>
          <p className="lead__caption">your shelf is top</p>
        </section>

      <section className="intro">
        <h2 className="section-title intro__title">What didn't we see there?</h2>
        <p className="section-subtitle intro__subtitle">
          According to VTsIOM polls, 95% of Russians dream of going somewhere, but only 36% plan to spend their holidays in their native country. 
          Like, what have we not seen here at home? In fact, Russia is a whole universe with the gentle sea of the south, 
          the dense forests of the Sayans and the harsh ice of the Putorana Plateau. 
          And you can also see all these beauties without millions in your account, a passport and many hours of flights. 
          Like, for example, Vera Bashmakova, a brave young mother who took three children in her arms, 
          put them in her Lada and drove 20 thousand kilometers across her native country. 
          We have selected and described some interesting places worthy of your vacation.
        </p>
        <ul className="intro__list">
          <li className="intro__item">Time zones <span className="intro__span-accent">11</span></li>
          <li className="intro__item">UNESCO natural heritage sites <span className="intro__span-accent">12</span></li>
          <li className="intro__item">UNESCO cultural heritage sites <span className="intro__span-accent">16</span></li>
          <li className="intro__item">Nature reserves <span className="intro__span-accent">105</span></li>
          <li className="intro__item">Airports <span className="intro__span-accent">241</span></li>
        </ul>
      </section>

      <section className="photo-grid">
        <ul className="photo-grid__list">
          {photoGrid.map((photo) => {
            return <Photo photo={photo}/>
          })}
        </ul>
      </section>

      <section className="places">
        <ul className="places__list">
          {placesEn.map(place => {
            return (
            <Places 
            title={place.title} 
            link={place.link} 
            titleLink={place.titleLink} 
            text={place.text}
            img={place.imgLink}
            img768={place.imgLink768}
            img1280={place.imgLink1280}>
            </Places>
            )
          })}
        </ul>
      </section>

      <section className="cover">
        <a className="cover__link" href="https://stampsy.com/na-elektrichkakh-do-baikala">
          <div className="cover__block cover__block_hover">
            <h2 className="section-title cover__title">
              To Baikal "on dogs"
            </h2>
            <p className="cover__subtitle">
              Based on the educational theme
              about the Transsib - travel
              from the capital to Baikal by electric trains.
            </p>
          </div>
        </a>
      </section>
    </main>)
  )
}

export default Main;