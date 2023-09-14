import React from "react";
import "./Feedback.css";
import IvanBack from "../../images/Ivan.svg";
import Ivan from "../../images/Ivan.png";
import MariaBack from "../../images/Maria.svg";
import Maria from "../../images/Maria.png";

const Feedback = () => {
  return (
    <section className="feedback">
      <h2 className="feedback__title">Почему стоит покупать у нас?</h2>
      <h3 className="feedback__subtitle">
        У нас работают только профессионалы
      </h3>
      <div className="feedback__items">
        <div className="feedback__item">
          <img
            className="feedback__item-background"
            src={IvanBack}
            alt="background"
          />
          <img className="feedback__item-image" src={Ivan} alt="Ivan" />
          <h3 className="feedback__item-name">Мария Петрова</h3>
          <p className="feedback__item-description">UI/UX-дизайнер</p>
        </div>
        <div className="feedback__item">
          <img
            className="feedback__item-background"
            src={MariaBack}
            alt="background"
          />
          <img className="feedback__item-image" src={Maria} alt="Maria" />
          <h3 className="feedback__item-name">Иван Иванов</h3>
          <p className="feedback__item-description">PHP-программист</p>
        </div>
        <div className="feedback__item">
          <img
            className="feedback__item-background"
            src={IvanBack}
            alt="background"
          />
          <img className="feedback__item-image" src={Ivan} alt="Ivan" />
          <h3 className="feedback__item-name">Иван Иванов</h3>
          <p className="feedback__item-description">PHP-программист</p>
        </div>
        <div className="feedback__item">
          <img
            className="feedback__item-background"
            src={MariaBack}
            alt="background"
          />
          <img className="feedback__item-image" src={Maria} alt="Ivan" />
          <h3 className="feedback__item-name">Мария Петрова</h3>
          <p className="feedback__item-description">UI/UX-дизайнер</p>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
