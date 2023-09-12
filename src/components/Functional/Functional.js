import React, { useState } from "react";
import "./Functional.css";
import man from "../../images/man.png";
import target from "../../images/target.svg";
import bot from "../../images/bot.svg";
import bunny from "../../images/bunny.svg";
import changer from "../../images/changer.svg";
import eye from "../../images/eye.svg";
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
              <img className="functional__info-image" src={bot} alt="bot" />
              <div className="functional__button-wrapper">
                <h3 className="functional__button-name">Rage Bot</h3>
                <button className="functional__button-more">Подробнее</button>
              </div>
            </button>
            <button className="functional__info-button">
              <img
                className="functional__info-image"
                src={changer}
                alt="changer"
              />
              <div className="functional__button-wrapper">
                <h3 className="functional__button-name">
                  Inventory <br />
                  Changer
                </h3>
                <button className="functional__button-more">Подробнее</button>
              </div>
            </button>
            <button className="functional__info-button">
              <img
                className="functional__info-image"
                src={bunny}
                alt="bunnyhop"
              />
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
    </section>
  );
};

export default Functional;
