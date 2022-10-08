import React, { useContext, useState } from 'react';
import { API } from "../helpers/consts";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {


  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  console.log(user)

  const navigate = useNavigate();

  const config = {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  };

  const register = async (username, email, password, day, month, year, gender) => {
    let data = {
      "username": username,
      "email": email,
      "password": password,
      "day": day,
      "month": month,
      "year": year,
      "gender": gender,
      "avatar": "https://w7.pngwing.com/pngs/845/519/png-transparent-computer-icons-avatar-avatar-heroes-logo-fictional-character.png",
      "height": "",
      "weight": "",
      "hairColor": "",
      "eyeColor": "",
      "PurposeOfDating": "",
      "about": "",
      "admin": false,
    }

    try {
      const res = await axios.post(`${API}/register`, data, config);
      navigate("/login");
    } catch (error) {
      setError(`${error.response.data}`);
    }
  }

  const login = async (email, password) => {
    let data = {
      "email": email,
      "password": password
    }

    try {
      let res = await axios.post(`${API}/login`, data, config);
      navigate("/");
      localStorage.setItem("user", JSON.stringify(res.data.accessToken));
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user)
    } catch (error) {
      setError(`${error.response.data}`);
    }
  }

  const profileSaveChanges = async (user) => {
    await axios.patch(`${API}/users/${user.id}`, user);
    localStorage.setItem("user", JSON.stringify(user));
    window.location.reload();
  }


  return (
    <authContext.Provider
      value={{
        register,
        login,
        profileSaveChanges,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;