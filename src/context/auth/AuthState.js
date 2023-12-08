import React from "react";
import authContext from "./AuthContext";

const AuthState = (props) => {
  const host = "http://localhost:5000";

  //get all users
  const getUsers = async () => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    return Promise.resolve(json.name).then((value) => {
      return value;
    });
  };

  //login user
  const loginUser = async (userEmail, userPassword) => {
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      window.location.replace("/");
    } else {
      alert(json.error);
    }
  };

  //signup user

  const signupUser = async (userName, userMail, userPass) => {
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email: userMail,
        password: userPass,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      window.location.replace("/");
    } else {
      alert(json.error);
    }
  };

  return (
    <authContext.Provider value={{ getUsers, loginUser, signupUser }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
