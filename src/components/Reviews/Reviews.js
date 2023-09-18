import React from "react";
import "./Reviews.css";
import reviews from "../../images/reviews.png";
import video1 from "../../images/video1.png";
import video2 from "../../images/video2.png";
import video3 from "../../images/video3.png";
import youtube from "../../images/youtube.svg";
import scrollbar from "../../images/scrollbar.svg";

const Reviews = () => {
  return (
    <section className="reviews">
      <h2 className="reviews__title">Отзывы</h2>
      <h3 className="reviews__subtitle">
        Честные отзывы от довольных игроков и видеобзоры от топовых геймеров
      </h3>
      <img className="reviews__image" src={reviews} alt="reviews" />
      <button className="reviews__button">Посмотреть все отзывы</button>
      <h2 className="reviews__title">Видеобзоры</h2>
      <div className="reviews__video">
        <div className="reviews__video-wrapper">
          <img className="reviews__image" src={video1} alt="video" />
          <img className="reviews__video-button" src={youtube} alt="button" />
        </div>
        <div className="reviews__video-wrapper">
          <img className="reviews__image" src={video2} alt="video" />
          <img className="reviews__video-button" src={youtube} alt="button" />
        </div>
        <div className="reviews__video-wrapper">
          <img className="reviews__image" src={video3} alt="video" />
          <img className="reviews__video-button" src={youtube} alt="button" />
        </div>
      </div>
      <img
        className="reviews__image-scrollbar"
        src={scrollbar}
        alt="scrollbar"
      />
    </section>
  );
};

export default Reviews;
