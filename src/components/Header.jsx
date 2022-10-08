import React from "react";
import logo from "../assets/icons/logo.svg";
import search from "../assets/icons/search.svg";
import bell from "../assets/icons/bell.svg";
import "../styles/header.scss";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../context/UsersContextProvider";
import Avatar from "../assets/images/profile-icon.png";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {

  const navigate = useNavigate();

  let user = {
    username: "Username",
    avatar: ""
  }

  localStorage.getItem("user") ? (user = JSON.parse(localStorage.getItem("user"))) : (console.log("error"))






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
          {
            localStorage.getItem("user") ? (
              <div className="header-user">
                <a onClick={() => navigate("/profile")}>
                  <div className="header__user-avatar">
                    <img
                      src={
                        user.avatar == "" ? (user.avatar) : Avatar
                      }
                      alt=""
                    />
                  </div>
                  <div className="header__user-username">{user.username}</div>
                </a>
              </div>
            ) : (
              <button className="header__auth-btn" onClick={() => navigate("/login")}>Войти</button>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
