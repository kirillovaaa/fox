import React from "react";
import "./Popup.css";

const Popup = ({ active, setActive }) => {
  return (
    <div
      className={active ? "popup popup__opened" : "popup"}
      onClick={() => setActive(false)}
    >
      <div className="popup__form" onClick={(e) => e.stopPropagation()}></div>
    </div>
  );
};
export default Popup;
