import React from "react";
import { useSelector } from "react-redux";
import Form from "./form";
import LoginForm from "./loginForm";
import { useAppDispatch } from "@/app/store/hooks";
import { toggleForm } from "@/app/store/user/user";

const UserForm = () => {

  return (
    <>
      <Form />

      <LoginForm />
    </>
  );
};
export default UserForm;
