import React, { useState, useEffect } from 'react';

import { createContext, useContext } from 'react';
import datas from './Data';

const UserContext = createContext();
export const useFirebase = () => {
  return useContext(UserContext);
};
const ProviderData = ({ children }) => {
  const getData = (page, limit) => {
    let arr = [];
    for (let i = (page - 1) * limit; i < limit * page; i++) {
      arr.push(datas[i]);
    }
    return arr;
  };
  const getLength = () => {
    return datas.length;
  };
  return (
    <UserContext.Provider value={{ getData, getLength }}>
      {children}
    </UserContext.Provider>
  );
};
export default ProviderData;
