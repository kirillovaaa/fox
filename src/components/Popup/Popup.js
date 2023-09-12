import React from "react";
import "./Popup.css";
import close from "../../images/close.svg";
import game from "../../images/game.png";
import stroke from "../../images/stroke.svg";
const Popup = ({ active, setActive, onClose }) => {
  return (
    <div
      className={active ? "popup popup_opened" : "popup"}
      onClick={() => setActive(false)}
    >
      <div className="popup__form" onClick={(e) => e.stopPropagation()}>
        <div className="popup__form-title">
          <h3 className="popup__form-name">Просмотр врагов через стены</h3>
          <button
            className="popup__close-button"
            type="button"
            onClick={onClose}
          >
            <img className="popup__close-icon" src={close} alt="close" />
          </button>
        </div>
        <img className="popup__form-image" src={game} alt="game" />
        <div className="popup__form-options">
          <img className="popup__options-image" src={stroke} alt="stroke" />
          <p className="popup__options-text">Визуализация топота (Sound ESP)</p>
        </div>
        <div className="popup__form-options">
          <img className="popup__options-image" src={stroke} alt="stroke" />
          <p className="popup__options-text">3 вида моделек</p>
        </div>
        <div className="popup__form-options">
          <img className="popup__options-image" src={stroke} alt="stroke" />
          <p className="popup__options-text">% здоровья и брони</p>
        </div>
        <div className="popup__form-options">
          <img className="popup__options-image" src={stroke} alt="stroke" />
          <p className="popup__options-text">Урон от бомбы</p>
        </div>
        <div className="popup__form-options">
          <img className="popup__options-image" src={stroke} alt="stroke" />
          <p className="popup__options-text">Время до взрыва</p>
        </div>
        <div className="popup__form-options">
          <img className="popup__options-image" src={stroke} alt="stroke" />
          <p className="popup__options-text">Остаток патрон у противника</p>
        </div>
      </div>
    </div>
  );
};
export default Popup;
