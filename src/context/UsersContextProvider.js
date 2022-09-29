import React, { useContext } from 'react';
import { API } from "../helpers/consts.js";

export const usersContext = React.createContext();
export const useUsers = () => useContext(usersContext);

const UsersContextProvider = ({ children }) => {



  return (
    <usersContext.Provider
      value={{
      }}
    >
      {children}
    </usersContext.Provider>
  );
};

export default UsersContextProvider;