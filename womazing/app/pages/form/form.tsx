"use client";

import React from "react";
import style from "./form.module.css";
import { useAppDispatch } from "@/app/store/hooks";
import { useSelector } from "react-redux";
import { createUser, toggleForm } from "@/app/store/user/user";

//@ts-ignore
const Form = () => {
  const dispatch = useAppDispatch();
  const { showForm } = useSelector(({ user }) => user);

  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
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
    dispatch(createUser(values));
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
        type="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="name"
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
      <input
        type="avatar"
        name="avatar"
        value={values.avatar}
        onChange={handleChange}
        placeholder="avatar"
        required
      />
      <button type="submit">Клик</button>
    </form>
  );
};

export default Form;
