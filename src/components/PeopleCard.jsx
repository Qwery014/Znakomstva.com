import React from "react";
import hi from "../assets/icons/hi-emoji.svg";
import "../styles/cardBlock.scss";
import { useNavigate } from "react-router-dom";

const PeopleCard = ({ item }) => {

  const navigate = useNavigate();





  return (
    <a
      className="user-profile__card"
      data-aos="fade-zoom"
      data-aos-easing="ease"
      data-aos-offset="0"
      data-aos-duration="1100"
      data-aos-once="true"
      onClick={() => navigate(`/profileview/${item.id}`)}
      style={{ background: `padding-box url(${item.avatar}) no-repeat center/cover` }}
      key={item.id}
    >
      <div className="user-card__user-info">
        <div className="user-card__name">
          {item.username} <span className="user-card__age">{" "}</span>
        </div>
        <button>
          Поприветствовать{" "}
          <span>
            <img src={hi} alt="" />
          </span>
        </button>
      </div>
    </a>
  );
};

export default PeopleCard;
