import React from "react";
import logo from "../assets/icons/logo.svg";
import search from "../assets/icons/search.svg";
import bell from "../assets/icons/bell.svg";
import "../styles/header.scss";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../context/UsersContextProvider";

const Header = () => {
  const {} = useUsers();
  
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <a className="logo" onClick={() => navigate("/")}>
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <div className="logo__link">Znakomstva.com</div>
        </a>
        <nav>
          <ul className="nav__list">
            <li className="nav__item active">
              <a>Анкеты</a>
              <div className="nav__item_bottom"></div>
            </li>
            <li className="nav__item">
              <a>Сообщения</a>
              <div className="nav__item_bottom"></div>
            </li>
            <li className="nav__item">
              <a>Подписка</a>
              <div className="nav__item_bottom"></div>
            </li>
          </ul>
        </nav>
        <div className="header-params__block">
          <button className="header-search">
            <img src={search} alt="" />
          </button>
          <button className="header-notifications">
            <img src={bell} alt="" />
          </button>
          <div className="header-user">
            <a>
              <div className="header__user-avatar">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/62cd5c01f9646a5e9526e20f/8453b850-db37-4b3c-b228-0131a83dcb5d/signature-style-selfie-stock-model-1x1.png?format=500w"
                  alt=""
                />
              </div>
              <div className="header__user-username">Иван Иванов</div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
