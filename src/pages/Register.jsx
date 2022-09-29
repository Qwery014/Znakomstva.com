import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import "../styles/auth.scss";
import Footer from "../components/Footer";
import maleIco from "../assets/icons/male.svg";
import femaleIco from "../assets/icons/female.svg";
import { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";


const Register = () => {

  // Функциональная часть start

  const navigate = useNavigate();

  const { register, error } = useAuth();



  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("january");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");


  function handleRegister(
    username,
    email,
    password,
    day,
    month,
    year,
    gender
  ) {
    if (username.trim() && email.trim() && password.trim() && day.trim() && month.trim() && year.trim() && gender.trim()) {
      register(username, email, password, day, month, year, gender);
    } else {
      setErrorDisplay("block")
    }
  }




  // Функциональная часть start

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
    <div className="reg-page">
      <div className="header__auth">
        <div className="container">
          <a className="logo" onClick={() => navigate("/")}>
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <div className="logo__link">Znakomstva.com</div>
          </a>
          <div className="to-login__block">
            Уже есть аккаунт?
            <button className="to-login__btn" onClick={() => navigate("/login")}>
              Войти
            </button>
          </div>
        </div>
      </div>
      <div className="reg__main">
        <div className="container">
          <div className="register__form_block">
            <h2 className="register__header">Создай новый аккаунт</h2>
            <h4 className="register__sub-header">
              Присоединяйся к сообществу из 518 млн человек!
            </h4>
            <form className="register__form" onSubmit={handleSubmit}>
              <div className="reg__input_block inp-and-icon">
                <label htmlFor="username" className="inp__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9.85723 9.63408C11.1808 9.63408 12.3267 9.15938 13.2633 8.22279C14.1996 7.28636 14.6744 6.14058 14.6744 4.81689C14.6744 3.49365 14.1997 2.34771 13.2631 1.41098C12.3266 0.4747 11.1806 0 9.85723 0C8.53353 0 7.38775 0.4747 6.45132 1.41113C5.51489 2.34756 5.04004 3.49349 5.04004 4.81689C5.04004 6.14058 5.51489 7.28652 6.45132 8.22295C7.38806 9.15922 8.53399 9.63408 9.85723 9.63408ZM7.28018 2.23983C7.99871 1.5213 8.84161 1.17203 9.85723 1.17203C10.8727 1.17203 11.7157 1.5213 12.4344 2.23983C13.153 2.95852 13.5024 3.80157 13.5024 4.81689C13.5024 5.83251 13.153 6.6754 12.4344 7.39409C11.7157 8.11278 10.8727 8.46205 9.85723 8.46205C8.84191 8.46205 7.99902 8.11263 7.28018 7.39409C6.56149 6.67555 6.21206 5.83251 6.21206 4.81689C6.21206 3.80157 6.56149 2.95852 7.28018 2.23983Z" fill="#8B5D9A" />
                    <path d="M18.2863 15.379C18.2592 14.9893 18.2046 14.5642 18.1242 14.1153C18.043 13.663 17.9385 13.2354 17.8134 12.8447C17.684 12.4408 17.5084 12.0419 17.2909 11.6597C17.0656 11.2629 16.8007 10.9175 16.5034 10.6332C16.1926 10.3358 15.812 10.0967 15.372 9.92231C14.9334 9.74882 14.4475 9.66093 13.9276 9.66093C13.7234 9.66093 13.526 9.7447 13.1447 9.99296C12.91 10.146 12.6355 10.323 12.3291 10.5188C12.0671 10.6857 11.7122 10.8421 11.2738 10.9837C10.8461 11.1221 10.4118 11.1923 9.98305 11.1923C9.55458 11.1923 9.12032 11.1221 8.69231 10.9837C8.25438 10.8423 7.89931 10.6859 7.63778 10.5189C7.33428 10.325 7.05962 10.148 6.82143 9.99281C6.44042 9.74455 6.24297 9.66078 6.03881 9.66078C5.51879 9.66078 5.03295 9.74882 4.59457 9.92247C4.15481 10.0966 3.77411 10.3357 3.46298 10.6334C3.16574 10.9178 2.90085 11.2631 2.67563 11.6597C2.45849 12.0419 2.28271 12.4406 2.15332 12.8448C2.02835 13.2356 1.92383 13.663 1.84265 14.1153C1.76208 14.5636 1.70761 14.9888 1.6806 15.3795C1.65405 15.7614 1.64062 16.1589 1.64062 16.5605C1.64062 17.6045 1.9725 18.4497 2.62695 19.073C3.27331 19.6881 4.12841 20 5.1686 20H14.7987C15.8386 20 16.6937 19.6881 17.3402 19.073C17.9948 18.4501 18.3267 17.6046 18.3267 16.5603C18.3265 16.1573 18.313 15.7599 18.2863 15.379ZM16.5321 18.2238C16.105 18.6303 15.538 18.8279 14.7986 18.8279H5.1686C4.42901 18.8279 3.862 18.6303 3.43506 18.224C3.0162 17.8253 2.81265 17.281 2.81265 16.5605C2.81265 16.1857 2.82501 15.8157 2.84973 15.4605C2.87384 15.112 2.92312 14.7291 2.99621 14.3223C3.06839 13.9206 3.16025 13.5435 3.2695 13.2022C3.37433 12.8749 3.5173 12.5508 3.69461 12.2386C3.86383 11.941 4.05853 11.6858 4.27337 11.4801C4.47433 11.2877 4.72763 11.1302 5.02609 11.0121C5.30212 10.9028 5.61233 10.843 5.94909 10.834C5.99013 10.8558 6.06322 10.8975 6.18163 10.9747C6.42257 11.1317 6.70028 11.3109 7.00728 11.5069C7.35335 11.7276 7.79921 11.9269 8.3319 12.0988C8.87648 12.2749 9.4319 12.3643 9.9832 12.3643C10.5345 12.3643 11.0901 12.2749 11.6344 12.099C12.1675 11.9267 12.6132 11.7276 12.9597 11.5066C13.2739 11.3058 13.5438 11.1319 13.7848 10.9747C13.9032 10.8977 13.9763 10.8558 14.0173 10.834C14.3542 10.843 14.6644 10.9028 14.9406 11.0121C15.2389 11.1302 15.4922 11.2878 15.6932 11.4801C15.908 11.6856 16.1027 11.9409 16.2719 12.2387C16.4494 12.5508 16.5925 12.875 16.6972 13.202C16.8066 13.5438 16.8986 13.9207 16.9706 14.3222C17.0436 14.7297 17.093 15.1127 17.1171 15.4606V15.4609C17.142 15.8148 17.1545 16.1847 17.1547 16.5605C17.1545 17.2812 16.951 17.8253 16.5321 18.2238Z" fill="#8B5D9A" />
                  </svg>
                </label>
                <input
                  id="username"
                  type="text"
                  className="reg-username reg__inp"
                  placeholder="Ваше имя"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="reg-date">
                <h5 className="auth-input__header">Дата рождения</h5>
                <div className="reg-date__input_blocks">
                  <div className="reg-around">
                    <input type="text" className="reg__inp reg__inp_date" placeholder="День" onChange={(e) => setDay(e.target.value)} required />
                  </div>
                  <div className="reg-between">
                    <select
                      name="date"
                      id="reg-date"
                      className="reg__inp reg__inp_date"
                      value={month}
                      style={{ color: "#CCC" }}
                      onChange={(e) => {
                        setMonth(e.target.value)
                      }}>
                      <option value="january">Январь</option>
                      <option value="february">Февраль</option>
                      <option value="march">Март</option>
                      <option value="april">Апрель</option>
                      <option value="may">Май</option>
                      <option value="june">Июнь</option>
                      <option value="july">Июль</option>
                      <option value="august">Август</option>
                      <option value="september">Сентябрь</option>
                      <option value="october">Октябрь</option>
                      <option value="november">Ноябрь</option>
                      <option value="december">Декабрь</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4.5 7.5L9 12L13.5 7.5" stroke="#8B5D9A" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="reg-around">
                    <input type="text" className="reg__inp reg__inp_date" placeholder="Год" onChange={(e) => setYear(e.target.value)} required />
                  </div>
                </div>
              </div>
              <div className="reg-sex__block">
                <input type="radio" name="gender" id="male" value="male" onChange={() => setGender("male")} />
                <input type="radio" name="gender" id="female" value="female" onChange={() => setGender("female")} />
                <label htmlFor="male" className="label-male">
                  <img src={maleIco} alt="" />
                </label>
                <label htmlFor="female" className="label-female">
                  <img src={femaleIco} alt="" />
                </label>
              </div>
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
                <input type="email" placeholder="Введите электронную почту" id="inp__mail" onChange={(e) => setEmail(e.target.value)} required />
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
                <input type={passShow} placeholder="Введите пароль" id="inp__pass" onChange={(e) => setpassword(e.target.value)} required minLength="8" />
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
              <div className="error__div" style={{ display: errorDisplay }}>
                Неверные данные
              </div>
              <button type="submit" className="btn__create-acoount" onClick={() => handleRegister(username, email, password, day, month, year, gender)}>Создать аккаунт</button>
            </form>
          </div>
        </div>
      </div >
      <div className="footer-wrap">
        <Footer />
      </div>
    </div>
  );
};

export default Register;
