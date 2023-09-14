import React from "react";
import "./Calc.css";
import webmoney from "../../images/webmoney.png";
import qiwi from "../../images/qiwi.png";
import visa from "../../images/visa.png";
import mastercard from "../../images/mastercard.png";

const Calc = () => {
  return (
    <section className="calc">
      <div className="calc__pay">
        <h3 className="calc__pay-title">
          Ты можешь оплатить любым удобным <br />
          способом:
        </h3>
        <div className="calc__pay-wrapper">
          <img className="calc__pay-image" src={webmoney} alt="webmoney" />
          <img className="calc__pay-image" src={qiwi} alt="qiwi" />
          <img className="calc__pay-image" src={visa} alt="visa" />
          <img className="calc__pay-image" src={mastercard} alt="mastercard" />
        </div>
      </div>
    </section>
  );
};

export default Calc;
