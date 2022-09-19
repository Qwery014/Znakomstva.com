import React from "react";
import hi from "../assets/icons/hi-emoji.svg";
import "../styles/cardBlock.scss";
import country from "../assets/icons/russia.svg";

const PeopleCard = () => {
  return (
    <div
      className="user-profile__card"
      data-aos="fade-zoom"
      data-aos-easing="ease"
      data-aos-offset="0"
      data-aos-duration="1100"
      data-aos-once="true"
    >
      <div className="user-card__user-info">
        <div className="user-card__name">
          Виктор <span className="user-card__age">22</span>
        </div>
        <div className="user-card__country-block">
          <img src={country} alt="" />
          <p>Россия</p>
        </div>
        <button>
          Поприветствовать{" "}
          <span>
            <img src={hi} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default PeopleCard;
