import React, { useState } from "react";


export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
  }
   
  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }
   
  // remove the token and user from the session storage
   
  // set the token and user from the session storage
  export const setUserSession = (token) => {
    sessionStorage.setItem('token', token);
  }
  
  export const setUserInfos = (email, username, date_joined) => {
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('date_joined', date_joined);
  }

  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('date_joined');

  }

  export const isLogin = () => {
    if (getToken() != null && getToken().length > 10){
        return true; 
    }
    return false;    
  }

  export const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }

  export const useFormFields = (initialState) => {
    const [fields, setValues] = useState(initialState);
    return [
      fields,
      function(event) {
        setValues({
          ...fields,
          [event.target.id]: event.target.value
        });
      }
    ];
  }
  
  