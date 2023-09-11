import React from "react";
import logo from "../../images/logo.svg";
import profile from "../../images/profile-image.svg";
import telegram from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import play from "../../images/play.svg";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__wrapper-heading">
          <img className="header__image" src={logo} alt="logo" />
          <div className="header__nav">
            <button className="header__nav-button" type="button">
              ФУНКЦИОНАЛ
            </button>
            <button className="header__nav-button" type="button">
              СТОИМОСТЬ
            </button>
            <button className="header__nav-button" type="button">
              ОТЗЫВ
            </button>
            <button className="header__nav-button" type="button">
              БЛОГ
            </button>
          </div>
          <div className="header__auth">
            <img
              className="header__auth-image"
              src={profile}
              alt="profile-image"
            />
            <button className="header__auth-button" type="button">
              Войти
            </button>
          </div>
          <div className="header__messenger">
            <span className="header__messenger-text">
              Свяжитесь с нами <br />
              через мессенджеры
            </span>
            <div className="header__messenger-container">
              <img
                className="header__messenger-image"
                src={telegram}
                alt="telegram"
              />
              <img
                className="header__messenger-image"
                src={viber}
                alt="viber"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="header__wrapper-promo">
        <h2 className="header__promo-subtitle">ПРИВАТНЫЙ ЧИП CS:GO</h2>
        <h1 className="header__promo-title">
          <span class="colortext">Купил</span> и через <br /> 5 минут ты уже{" "}
          <br /> катаешь
        </h1>
        <span className="header__promo-text">Сделан специально для</span>
        <div className="header__promo-buttons">
          <button className="header__promo-button" type="button">
            Купить
          </button>
          <button className="header__promo-button-blue" type="button">
            <img className="header__button-image" src={play} alt="play-icon" />
            Смотреть обзор
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
