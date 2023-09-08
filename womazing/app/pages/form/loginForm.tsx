"use client";

import React from "react";
import style from "./form.module.css";
import { useAppDispatch } from "@/app/store/hooks";
import { useSelector } from "react-redux";
import { loginUser, toggleForm } from "@/app/store/user/user";

//@ts-ignore
const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { showForm } = useSelector(({ user }) => user);

  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  //@ts-ignore
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(values).every((val) => val);

    if (!isEmpty) return;

    //@ts-ignore
    dispatch(loginUser(values));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="email"
        required
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="password"
        required
      />
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
