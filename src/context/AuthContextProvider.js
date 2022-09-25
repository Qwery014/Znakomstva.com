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

  return (
    <authContext.Provider
      value={{
        register,
        login
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;