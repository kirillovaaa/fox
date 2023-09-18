import React from "react";
import "./Blog.css";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";

const Blog = () => {
  return (
    <section className="blog">
      <h2 className="blog__title">Блог</h2>
      <div className="blog__items">
        <div className="blog__item">
          <img className="blog__item-image" src={image1} alt="game" />
          <p className="blog__item-text">
            Как понизить пинг в CS:GO,
            <br /> уменьшить пинг в CS:GO
          </p>
          <button className="blog__item-button">Подробнее</button>
        </div>
        <div className="blog__item">
          <img className="blog__item-image" src={image2} alt="game" />
          <p className="blog__item-text">
            Как понизить пинг в CS:GO,
            <br /> уменьшить пинг в CS:GO
          </p>
          <button className="blog__item-button">Подробнее</button>
        </div>
        <div className="blog__item">
          <img className="blog__item-image" src={image3} alt="game" />
          <p className="blog__item-text">
            Как понизить пинг в CS:GO,
            <br /> уменьшить пинг в CS:GO
          </p>
          <button className="blog__item-button">Подробнее</button>
        </div>
        <div className="blog__item">
          <img className="blog__item-image" src={image4} alt="game" />
          <p className="blog__item-text">
            Как понизить пинг в CS:GO,
            <br /> уменьшить пинг в CS:GO
          </p>
          <button className="blog__item-button">Подробнее</button>
        </div>
      </div>
      <button className="blog__button">Посмотреть еще</button>
    </section>
  );
};

export default Blog;
