import React, { useState } from 'react';
import { useAuth } from '../context/AuthContextProvider';
import "../styles/profile.scss";
import "../styles/auth.scss";
import maleIco from "../assets/icons/male.svg";
import femaleIco from "../assets/icons/female.svg";
import User from "../assets/images/profile-icon.png"

const ProfileProfile = () => {

  const { profileSaveChanges } = useAuth()

  let user = JSON.parse(localStorage.getItem("user"));


  // Data form User

  const [username, setUsername] = useState(user.username);
  const [day, setDay] = useState(user.day);
  const [month, setMonth] = useState(user.month);
  const [year, setYear] = useState(user.year);
  const [gender, setGender] = useState(user.gender);
  const [avatar, setAvatar] = useState(user.avatar);
  const [height, setHeight] = useState(user.height);
  const [weight, setWeight] = useState(user.weight);
  const [hairColor, setHairColor] = useState(user.hairColor);
  const [eyeColor, setEyeColor] = useState(user.eyeColor);
  const [PurposeOfDating, setPurposeOfDating] = useState(user.PurposeOfDating);
  const [about, setAbout] = useState(user.about);
  const [password, setPassword] = useState(user.password);
  const id = user.id;

  // 


  user = {
    username: username,
    day: day,
    month: month,
    year: year,
    gender: gender,
    avatar: avatar,
    height: height,
    weight: weight,
    hairColor: hairColor,
    eyeColor: eyeColor,
    PurposeOfDating: PurposeOfDating,
    about: about,
    password: password,
    id: id,
  }


  const [selectedGender, setSelectedGender] = useState(gender);

  const handleChangeGender = event => {
    setSelectedGender(event.target.value);
    setGender(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="profile__profile_blocks">
      <h4>
        Профиль
      </h4>
      <div className="profile__profile_block">
        <div className="profile__avatar_block">
          <input type="file" accept='image/jpeg' id='avatarCh' onChange={(e) => setAvatar(e.target.value)} />
          <img src={user.avatar == "" ? (user.avatar) : (User)} alt="" />
          <label htmlFor="avatarCh">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
              <path d="M29.0019 3.87261C28.403 3.24524 27.576 2.87452 26.635 2.87452H21.9011V2.81748C21.9011 2.10455 21.616 1.42014 21.1312 0.96387C20.6464 0.47908 19.9905 0.193909 19.2776 0.193909H10.7224C9.98099 0.193909 9.3251 0.47908 8.8403 0.96387C8.35551 1.44866 8.07034 2.10455 8.07034 2.81748V2.87452H3.36502C2.42395 2.87452 1.59696 3.24524 0.998099 3.87261C0.39924 4.47147 0 5.32699 0 6.23953V20.441C0 21.3821 0.370722 22.2091 0.998099 22.808C1.59696 23.4068 2.45247 23.8061 3.36502 23.8061H26.635C27.576 23.8061 28.403 23.4353 29.0019 22.808C29.6008 22.2091 30 21.3536 30 20.441V6.23953C30 5.29847 29.6293 4.47147 29.0019 3.87261ZM28.5171 20.441H28.4886C28.4886 20.9544 28.289 21.4106 27.9468 21.7528C27.6046 22.095 27.1483 22.2947 26.635 22.2947H3.36502C2.85171 22.2947 2.39544 22.095 2.05323 21.7528C1.71103 21.4106 1.51141 20.9544 1.51141 20.441V6.23953C1.51141 5.72623 1.71103 5.26995 2.05323 4.92775C2.39544 4.58554 2.85171 4.38592 3.36502 4.38592H8.86882C9.29658 4.38592 9.63878 4.04372 9.63878 3.61596V2.78896C9.63878 2.47528 9.75285 2.19011 9.95247 1.99049C10.1521 1.79087 10.4373 1.6768 10.751 1.6768H19.2776C19.5913 1.6768 19.8764 1.79087 20.076 1.99049C20.2757 2.19011 20.3897 2.47528 20.3897 2.78896V3.61596C20.3897 4.04372 20.7319 4.38592 21.1597 4.38592H26.6635C27.1768 4.38592 27.6331 4.58554 27.9753 4.92775C28.3175 5.26995 28.5171 5.72623 28.5171 6.23953V20.441Z" fill="#925FA4" />
              <path d="M14.9996 6.32507C13.0604 6.32507 11.2924 7.12355 10.0376 8.37831C8.75434 9.66158 7.98438 11.4011 7.98438 13.3403C7.98438 15.2794 8.78285 17.0475 10.0376 18.3023C11.3209 19.5855 13.0604 20.3555 14.9996 20.3555C16.9388 20.3555 18.7068 19.557 19.9616 18.3023C21.2448 17.019 22.0148 15.2794 22.0148 13.3403C22.0148 11.4011 21.2163 9.63306 19.9616 8.37831C18.7068 7.12355 16.9388 6.32507 14.9996 6.32507ZM18.8779 17.2471C17.8798 18.2167 16.511 18.8441 14.9996 18.8441C13.4882 18.8441 12.1194 18.2167 11.1213 17.2471C10.1232 16.249 9.5243 14.8802 9.5243 13.3688C9.5243 11.8574 10.1517 10.4886 11.1213 9.49047C12.1194 8.49237 13.4882 7.89351 14.9996 7.89351C16.511 7.89351 17.8798 8.52089 18.8779 9.49047C19.876 10.4886 20.4749 11.8574 20.4749 13.3688C20.5034 14.8802 19.876 16.249 18.8779 17.2471Z" fill="#925FA4" />
              <path d="M25.1512 9.09125C25.923 9.09125 26.5486 8.46564 26.5486 7.69391C26.5486 6.92218 25.923 6.29657 25.1512 6.29657C24.3795 6.29657 23.7539 6.92218 23.7539 7.69391C23.7539 8.46564 24.3795 9.09125 25.1512 9.09125Z" fill="#925FA4" />
            </svg>
          </label>
        </div>
        <div className="inputs__block_list">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input__block_item">
              <h5>
                Основная информация
              </h5>
              <div className="input__block_item-input">
                <div className='inp-descr'>
                  Имя
                </div>
                <input type="text" value={username} className='profile__inp' placeholder='Имя' onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="input__block_item-input">
                <div className='inp-descr'>Дата рождения</div>
                <div className="reg-date__input_blocks">
                  <div className="reg-around">
                    <input type="text" className="reg__inp reg__inp_date" placeholder='День' value={day} onChange={(e) => setDay(e.target.value)} required />
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
                    <input type="text" className="reg__inp reg__inp_date" placeholder='Год' value={year} onChange={(e) => setYear(e.target.value)} required />
                  </div>
                </div>
              </div>
              <div className="input__block_item-input">
                <div className='inp-descr'>Пол</div>
                <div className="reg-sex__block">
                  <input type="radio" name="gender" id="male" value="male" checked={selectedGender === 'male'} onChange={handleChangeGender} />
                  <input type="radio" name="gender" id="female" value="female" checked={selectedGender === 'female'} onChange={handleChangeGender} />
                  <label htmlFor="male" className="label-male">
                    <img src={maleIco} alt="" />
                  </label>
                  <label htmlFor="female" className="label-female">
                    <img src={femaleIco} alt="" />
                  </label>
                </div>
              </div>
            </div>
            <div className="input__block_item">
              <h5>
                Личная информация
              </h5>
              <div className="input__block_item-input">
                <div className='inp-descr'>
                  Рост
                </div>
                {/* <input type="text" className='profile__inp' placeholder='Рост' onChange={(e) => setHeight(e.target.value)} /> */}
                <div className="profile__select_block">
                  <select name="height" id="profile-height" value={height} onChange={(e) => setHeight(e.target.value)}>
                    <option value="40-100см">40-100см</option>
                    <option value="100-120см">100-120см</option>
                    <option value="120-130см">120-130см</option>
                    <option value="130-140см">130-140см</option>
                    <option value="140-150см">140-150см</option>
                    <option value="150-160см">150-160см</option>
                    <option value="160-170см">160-170см</option>
                    <option value="170-180см">170-180см</option>
                    <option value="180-190см">180-190см</option>
                    <option value="190-200см">190-200см</option>
                    <option value="200-210см">200-210см</option>
                    <option value="200см+">210см+</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4.5 7.5L9 12L13.5 7.5" stroke="#8B5D9A" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="input__block_item-input">
                <div className='inp-descr'>
                  Вес
                </div>
                {/* <input type="text" className='profile__inp' placeholder='Вес' onChange={(e) => setWeight(e.target.value)} /> */}
                <div className="profile__select_block">
                  <select name="weight" id="profile-weight" value={height} onChange={(e) => setWeight(e.target.value)}>
                    <option value="40-50кг">40-50кг</option>
                    <option value="50-60кг">50-60кг</option>
                    <option value="60-70кг">60-70кг</option>
                    <option value="70-80кг">70-80кг</option>
                    <option value="80-90кг">80-90кг</option>
                    <option value="90-100кг">90-100кг</option>
                    <option value="100-110кг">100-110кг</option>
                    <option value="110-120кг">110-120кг</option>
                    <option value="120-130кг">120-130кг</option>
                    <option value="130-140кг">130-140кг</option>
                    <option value="140-150кг">140-150кг</option>
                    <option value="150кг+">150кг+</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4.5 7.5L9 12L13.5 7.5" stroke="#8B5D9A" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="input__block_item-input">
                <div className='inp-descr'>
                  Цвет Волос
                </div>
                {/* <input type="text" className='profile__inp' placeholder='Цвет волос' onChange={(e) => setHairColor(e.target.value)} /> */}
                <div className="profile__select_block">
                  <select name="hairColor" id="profile-hairColor" value={hairColor} onChange={(e) => setHairColor(e.target.value)}>
                    <option value="Брюнет">Брюнет</option>
                    <option value="Рыжий">Рыжий</option>
                    <option value="Блондин">Блондин</option>
                    <option value="Шатен">Шатен</option>
                    <option value="Русый">Русый</option>
                    <option value="Седой">Седой</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4.5 7.5L9 12L13.5 7.5" stroke="#8B5D9A" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="input__block_item-input">
                <div className='inp-descr'>
                  Цвет глаз
                </div>
                {/* <input type="text" className='profile__inp' placeholder='Цвет глаз' onChange={(e) => setEyeColor(e.target.value)} /> */}
                <div className="profile__select_block">
                  <select name="hairColor" id="profile-hairColor" value={eyeColor} onChange={(e) => setEyeColor(e.target.value)}>
                    <option value="Синий">Синий</option>
                    <option value="Голубой">Голубой</option>
                    <option value="Серый">Серый</option>
                    <option value="Зелёный">Зелёный</option>
                    <option value="Буро-жёлто-зелёный">Буро-жёлто-зелёный</option>
                    <option value="Жёлтый">Жёлтый</option>
                    <option value="Карий">Карий</option>
                    <option value="Чёрный">Чёрный</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4.5 7.5L9 12L13.5 7.5" stroke="#8B5D9A" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="input__block_item-input">
                <div className='inp-descr inp-descr__textarea'>
                  Цель знакомства
                </div>
                {/* <textarea type="text" value={PurposeOfDating} maxLength={250} className='profile__inp' placeholder='Цель знакомства' onChange={(e) => setPurposeOfDating(e.target.value)} /> */}
                <div className="profile__select_block">
                  <select name="PurposeOfDating" id="profile-PurposeOfDating" value={PurposeOfDating} onChange={(e) => setPurposeOfDating(e.target.value)} >
                    <option value="idk">Пока не знаю</option>
                    <option value="Отношения">Отношения</option>
                    <option value="Дружба">Дружба</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4.5 7.5L9 12L13.5 7.5" stroke="#8B5D9A" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="input__block_item-input">
                <div className='inp-descr inp-descr__textarea'>
                  О себе
                </div>
                <textarea type="text" value={about} maxLength={250} className='profile__inp' placeholder='О себе' onChange={(e) => setAbout(e.target.value)} />
              </div>
            </div>
            <div className="input__block_item">
              <h5>
                Аккаунт
              </h5>
              <div className="input__block_item-input">
                <div className='inp-descr'>
                  Пароль
                </div>
                <input type="password" minLength="8" className='profile__inp' placeholder='Пароль' onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="input__block_item">
              <button onClick={() => profileSaveChanges(user)}>Сохранить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileProfile;