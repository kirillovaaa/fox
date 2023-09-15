import React from "react";
import logo from "../../images/logo.svg";
import profile from "../../images/profile-image.svg";
import telegram from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper-heading">
          <img className="footer__image" src={logo} alt="logo" />
          <div className="footer__nav">
            <button className="footer__nav-button" type="button">
              ФУНКЦИОНАЛ
            </button>
            <button className="footer__nav-button" type="button">
              СТОИМОСТЬ
            </button>
            <button className="footer__nav-button" type="button">
              ОТЗЫВ
            </button>
            <button className="footer__nav-button" type="button">
              БЛОГ
            </button>
          </div>
          <div className="footer__auth">
            <img className="footer__auth-image" src={profile} alt="profile" />
            <button className="footer__auth-button" type="button">
              Войти
            </button>
          </div>
          <div className="footer__messenger">
            <span className="footer__messenger-text">
              Свяжитесь с нами <br />
              через мессенджеры
            </span>
            <div className="footer__messenger-container">
              <img
                className="footer__messenger-image"
                src={telegram}
                alt="telegram"
              />
              <img
                className="footer__messenger-image"
                src={viber}
                alt="viber"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
