import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import { API } from "../helpers/consts.js";

export const usersContext = createContext();

export const useUsers = () => {
  return useContext(usersContext);
};

const INIT_STATE = {
  users: [],
  userDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "GET_USER_DETAILS":
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
}



const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const config = {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  };

  const getUsers = async () => {
    const { data } = await axios(`${API}/users`);

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  }

  const getProductDetails = async (id) => {
    const { data } = await axios(`${API}/users/${id}`);

    dispatch({
      type: "GET_USER_DETAILS",
      payload: data,
    });
  }



  return (
    <usersContext.Provider
      value={{
        getUsers,
        getProductDetails,
        users: state.users,
        userDetails: state.userDetails,
      }}
    >
      {children}
    </usersContext.Provider>
  );
};

export default UsersContextProvider;