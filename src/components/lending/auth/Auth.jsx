import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  registerUserWidthEmailPassword,
  signInGoogle,
  signInUserWidthEmailPassword,
} from "../../../redux/auth/AuthActions";

const Auth = () => {
  const [toggle, setToggle] = useState(false);
  const [checked, setChecked] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const checkedPassword = password === checkPassword ? true : false;

  const dispatch = useDispatch();

  const handleRegister = () => {
    setChecked(checkedPassword);
    checked && dispatch(registerUserWidthEmailPassword({ email, password }));
  };

  const handleSignIn = () => {
    setChecked(checkedPassword);
    checked && dispatch(signInUserWidthEmailPassword({ email, password }));
  };

  return (
    <div>
      <input
        type="email"
        placeholder="email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={e => setCheckPassword(e.target.value)}
      />
      {checked ? "" : "Пароли не Совпадают"}
      {toggle ? (
        <button onClick={handleRegister}>Register</button>
      ) : (
        <button onClick={handleSignIn}>Log in</button>
      )}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Log in" : "register"}
      </button>
      <button onClick={() => dispatch(signInGoogle())}>Google</button>
    </div>
  );
};

export default Auth;
