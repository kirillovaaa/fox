import React from "react";
import "./Questions.css";
import plus from "../../images/plus.svg";
import soldier from "../../images/soldier.png";
import union from "../../images/union.png";
import customer from "../../images/customerservice.svg";

const Questions = () => {
  return (
    <section className="questions">
      <h2 className="questions__title">Часто задаваемые вопросы</h2>
      <div className="questions__wrapper">
        <div className="questions__answers">
          <div className="questions__answers-wrapper">
            <img className="questions__answers-image" src={plus} alt="plus" />
            <h3 className="questions__answers-text">
              Подходит ли чит для MachMaking?
            </h3>
          </div>
          <div className="questions__answers-wrapper">
            <img className="questions__answers-image" src={plus} alt="plus" />
            <h3 className="questions__answers-text">
              Подходит ли чит для MachMaking?
            </h3>
          </div>
          <div className="questions__answers-wrapper">
            <img className="questions__answers-image" src={plus} alt="plus" />
            <h3 className="questions__answers-text">
              Подходит ли чит для MachMaking?
            </h3>
          </div>
        </div>
        <div className="questions__image-container">
          <img className="questions__image" src={soldier} alt="soldier" />
          <img className="questions__image-left" src={union} alt="union" />
          <div className="questions__container-service">
            <img
              className="questions__service-image"
              src={customer}
              alt="customer"
            />
            <span className="questions__service-text">24/7</span>
          </div>
          <p className="questions__image-text">Онлайн-поддержка</p>
        </div>
      </div>
    </section>
  );
};

export default Questions;
