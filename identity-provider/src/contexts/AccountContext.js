import React from 'react';

const defaultValues = {
  loggedInUser: "",
  loginUser: null,
  logoutUser: null,
};

export default React.createContext(defaultValues);