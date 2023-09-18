import React, { useState } from "react";
import "./Functional.css";
import man from "../../images/man.png";
import target from "../../images/target.svg";
import elipse from "../../images/elipse.svg";
import pazzl from "../../images/pazzl.svg";
import eye from "../../images/eye.svg";
import bunny from "../../images/bunny.svg";
import vac from "../../images/vac.svg";
import detail from "../../images/detail.svg";
import laptop from "../../images/laptop.svg";
import Popup from "../../components/Popup/Popup";

const Functional = () => {
  const [popupActive, setPopupActive] = useState(false);
  const closePopup = () => {
    setPopupActive(false);
  };
  return (
    <section className="functional">
      <div className="functional__info">
        <img className="functional__image-man" src={man} alt="man" />
        <div className="functional__info-wrapper">
          <h2 className="functional__info-title">Основной функционал</h2>
          <div className="functional__info-grid">
            <button className="functional__info-button">
              <img
                className="functional__info-image"
                src={target}
                alt="target"
              />
              <div className="functional__button-wrapper">
                <h3 className="functional__button-name">Legit Bot</h3>
                <button
                  className="functional__button-more"
                  onClick={() => setPopupActive(true)}
                >
                  Подробнее
                </button>
              </div>
            </button>
            <button className="functional__info-button">
              <img className="functional__info-image" src={eye} alt="eye" />
              <div className="functional__button-wrapper">
                <h3 className="functional__button-name">Wallhack</h3>
                <button className="functional__button-more">Подробнее</button>
              </div>
            </button>
            <button className="functional__info-button">
              <img className="functional__info-image" src={bunny} alt="bunny" />
              <div className="functional__button-wrapper">
                <h3 className="functional__button-name">Bunny Hop</h3>
                <button className="functional__button-more">Подробнее</button>
              </div>
            </button>
          </div>
        </div>
        <Popup
          active={popupActive}
          setActive={setPopupActive}
          onClose={closePopup}
        />
      </div>
      <div className="functional__chit">
        <h2 className="functional__chit-title">Преимущества чита</h2>
        <div className="functional__chit-items">
          <div className="functional__chit-item">
            <img
              className="functional__chit-background"
              src={elipse}
              alt="elipse"
            />
            <img className="functional__chit-image" src={pazzl} alt="pazzl" />
            <h3 className="functional__chit-name">Гибкость</h3>
            <p className="functional__chit-description">
              Гибкий и полностью <br /> настраиваемый аимбот
            </p>
          </div>
          <div className="functional__chit-item">
            <img
              className="functional__chit-background"
              src={elipse}
              alt="elipse"
            />
            <img className="functional__chit-image" src={detail} alt="detail" />
            <h3 className="functional__chit-name">Оптимизация</h3>
            <p className="functional__chit-description">
              Хорошая оптимизация, <br /> потребление ресурсов <br />
              минимальное
            </p>
          </div>
          <div className="functional__chit-item">
            <img
              className="functional__chit-background"
              src={elipse}
              alt="elipse"
            />
            <img className="functional__chit-image" src={vac} alt="vac" />
            <h3 className="functional__chit-name">Защита от VAC</h3>
            <p className="functional__chit-description">
              Собственные разработки, которые <br /> позволяют избежать
              блокировки
            </p>
          </div>
          <div className="functional__chit-item">
            <img
              className="functional__chit-background"
              src={elipse}
              alt="elipse"
            />
            <img className="functional__chit-image" src={laptop} alt="laptop" />
            <h3 className="functional__chit-name">Дизайн</h3>
            <p className="functional__chit-description">
              Красивая визуальная часть, <br />
              удобное меню
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Functional;
