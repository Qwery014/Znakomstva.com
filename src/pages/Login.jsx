import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/auth.scss";
import logo from "../assets/icons/logo.svg";
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContextProvider';

const Login = () => {

  // Функциональная часть start

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login, error } = useAuth();

  function handleLogin(email, password) {
    if (email.trim() && password.trim()) {
      login(email, password);
    } else {
      setErrorDisplay("block")
    }
  }

  // Функциональная часть end

  // Визуальная часть start
  const [errorDisplay, setErrorDisplay] = useState("none")

  const [passShow, setPassShow] = useState("password");
  const [eyeColor, setEyeColor] = useState("#8B5D9A")

  function handleSubmit(e) {
    e.preventDefault();
  }

  function passShowFunc() {
    setPassShow("text");
    setEyeColor("#581a6d");
  }

  function passCloseFunc() {
    setPassShow("password");
    setEyeColor("#8B5D9A");
  }

  // Визуальная часть end

  return (
    <div className="login-page">
      <div className="header__auth">
        <div className="container">
          <a className="logo" onClick={() => navigate("/")}>
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <div className="logo__link">Znakomstva.com</div>
          </a>
          <div className="to-login__block">
            Впервые здесь?
            <button className="to-login__btn" onClick={() => navigate("/register")}>
              Регистрация
            </button>
          </div>
        </div>
      </div>
      <div className="login__main">
        <div className="container">
          <div className="login__form_block" onSubmit={handleSubmit}>
            <h2 className="login__header">Знакомства без преград</h2>
            <h3 className="login__sub-header" style={{ color: "white" }}>
              Для современного мира сплочённость команды профессионалов однозначно фиксирует необходимость системы обучения кадров, соответствующей насущным потребностям.
            </h3>
            <form className="login__form">
              <div className="reg__input_block inp-and-icon">
                <label htmlFor="inp__mail">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                  >
                    <path
                      d="M18.2422 0.148773H1.75781C0.788555 0.148773 0 0.937328 0 1.90659V12.0934C0 13.0626 0.788555 13.8512 1.75781 13.8512H18.2422C19.2114 13.8512 20 13.0626 20 12.0934V1.90659C20 0.937328 19.2114 0.148773 18.2422 0.148773ZM18.0128 1.32065L17.7782 1.516L10.6974 7.41213C10.2933 7.74862 9.70664 7.74862 9.30258 7.41213L2.22184 1.516L1.98723 1.32065H18.0128ZM1.17188 2.16666L6.94109 6.97069L1.17188 10.8103V2.16666ZM18.2422 12.6793H1.75781C1.47469 12.6793 1.23789 12.4774 1.18363 12.2101L7.8807 7.75307L8.55273 8.31268C8.97203 8.66182 9.48606 8.83639 10 8.83639C10.514 8.83639 11.028 8.66182 11.4473 8.31268L12.1194 7.75307L18.8164 12.2101C18.7621 12.4775 18.5253 12.6793 18.2422 12.6793ZM18.8281 10.8103L13.0589 6.97073L18.8281 2.16666V10.8103Z"
                      fill="#8B5D9A"
                    />
                  </svg>
                </label>
                <input type="email" placeholder="Введите электронную почту" id='inp__mail' onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="reg__input_block inp-and-icon-around">
                <label htmlFor="inp__pass">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                  >
                    <path
                      d="M16.9688 14.1406C17.4002 14.1406 17.75 13.7909 17.75 13.3594V10.4688C17.75 8.74562 16.3481 7.34375 14.625 7.34375H13.6861V4.58852C13.6861 2.0584 11.5832 0 8.99855 0C6.41387 0 4.31105 2.0584 4.31105 4.58852V7.34375H3.375C1.65188 7.34375 0.25 8.74562 0.25 10.4688V16.875C0.25 18.5981 1.65188 20 3.375 20H14.625C16.3481 20 17.75 18.5981 17.75 16.875C17.75 16.4435 17.4002 16.0938 16.9688 16.0938C16.5373 16.0938 16.1875 16.4435 16.1875 16.875C16.1875 17.7366 15.4866 18.4375 14.625 18.4375H3.375C2.51344 18.4375 1.8125 17.7366 1.8125 16.875V10.4688C1.8125 9.60719 2.51344 8.90625 3.375 8.90625H14.625C15.4866 8.90625 16.1875 9.60719 16.1875 10.4688V13.3594C16.1875 13.7909 16.5373 14.1406 16.9688 14.1406ZM12.1236 7.34375H5.87355V4.58852C5.87355 2.91996 7.27543 1.5625 8.99855 1.5625C10.7217 1.5625 12.1236 2.91996 12.1236 4.58852V7.34375Z"
                      fill="#8B5D9A"
                    />
                  </svg>
                </label>
                <input type={passShow} placeholder="Введите пароль" id='inp__pass' onChange={(e) => setPassword(e.target.value)} required minlength="6" />
                <div className="pass_btn-show">
                  <button onClick={() => ((passShow === "password") ? passShowFunc() : passCloseFunc())}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_17_4335)">
                        <path
                          d="M19.8507 9.60918C19.6722 9.41004 15.3782 4.72656 10 4.72656C4.62181 4.72656 0.32791 9.41004 0.149355 9.60918C-0.0497851 9.83176 -0.0497851 10.1682 0.149355 10.3908C0.32791 10.59 4.62189 15.2734 10 15.2734C15.3781 15.2734 19.6721 10.59 19.8507 10.3908C20.0498 10.1682 20.0498 9.83176 19.8507 9.60918ZM10 14.1016C7.73865 14.1016 5.89845 12.2614 5.89845 10C5.89845 7.73863 7.73865 5.89844 10 5.89844C12.2614 5.89844 14.1016 7.73863 14.1016 10C14.1016 12.2614 12.2614 14.1016 10 14.1016Z"
                          fill={eyeColor}
                        />
                        <path
                          d="M10.5859 8.82812C10.5859 8.23867 10.8786 7.72012 11.3237 7.40117C10.9243 7.19668 10.4787 7.07031 10 7.07031C8.38465 7.07031 7.07031 8.38465 7.07031 10C7.07031 11.6154 8.38465 12.9297 10 12.9297C11.4462 12.9297 12.6433 11.8737 12.8798 10.4938C11.6998 10.8737 10.5859 9.98133 10.5859 8.82812Z"
                          fill={eyeColor}
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_17_4335">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="error__div" style={{display: errorDisplay}}>
                Неверные данные
              </div>
              <button type="submit" className="btn__create-acoount" onClick={() => handleLogin(email, password)}>Войти в аккаунт</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-wrap">
        <Footer />
      </div>
    </div>
  );
};

export default Login;