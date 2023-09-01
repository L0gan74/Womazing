"use client";

import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import Navigation from "./nav";
import Link from "next/link";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import { useForm } from "react-hook-form";

const styleModal = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface IFormInput {
  firstName: string;
  email: string;
  phone: string;
  example: string;
}

const Header: React.FC = () => {
  const navLink = [
    { label: "Главная", href: "/" },
    { label: "Магазин", href: "/pages/shop" },
    { label: "О бренде", href: "/pages/about " },
    { label: "Конакты", href: "/pages/contacts" },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  };

  return (
    <header className={style.header}>
      <Link href="/">
        <Image src="/logo.svg" width={139} height={25} alt="logo" />
      </Link>
      <nav className={style.nav}>
        <Navigation navLink={navLink} />
      </nav>
      <div className={style.right}>
        <Button onClick={handleOpen}>
          <span>
            <Image src="/tel.svg" width={27} height={27} alt="telefon" />
            <p>+7 (495) 823-54-12</p>
          </span>
        </Button>
        <Link href="/pages/basket">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_46749_616)">
              <path
                d="M23.8454 8.2243C23.7281 8.10906 23.5642 8.05442 23.4012 8.07624H17.0343V5.26295C17.0343 2.4826 14.7804 0.228699 12.0001 0.228699C9.21971 0.228699 6.96582 2.4826 6.96582 5.26295V8.07624H0.598861C0.421164 8.07624 0.243523 8.07624 0.154646 8.2243C0.0352739 8.33902 -0.0201042 8.5051 0.00659291 8.66851L2.22761 20.81C2.53789 22.5037 4.00034 23.7431 5.72199 23.7713H18.278C20.0046 23.7289 21.464 22.4797 21.7724 20.7804L23.9934 8.66851C24.0201 8.5051 23.9648 8.33902 23.8454 8.2243ZM8.1503 5.26295C8.1503 3.13682 9.87388 1.41324 12 1.41324C14.1261 1.41324 15.8497 3.13682 15.8497 5.26295V8.07624H8.1503V5.26295ZM20.5879 20.6323C20.3884 21.7547 19.4179 22.5759 18.278 22.5868H5.72199C4.58212 22.5759 3.61161 21.7547 3.41215 20.6323L1.30959 9.26078H22.6904L20.5879 20.6323Z"
                fill="black"
              />
              <path
                d="M16.442 15.0354C16.7691 15.0354 17.0343 14.7702 17.0343 14.4431V12.6663C17.0343 12.3392 16.7691 12.074 16.442 12.074C16.1149 12.074 15.8497 12.3392 15.8497 12.6663V14.4431C15.8497 14.7702 16.1149 15.0354 16.442 15.0354Z"
                fill="black"
              />
              <path
                d="M7.55809 15.0354C7.8852 15.0354 8.15036 14.7702 8.15036 14.4431V12.6663C8.15036 12.3392 7.8852 12.074 7.55809 12.074C7.23098 12.074 6.96582 12.3392 6.96582 12.6663V14.4431C6.96582 14.7702 7.23098 15.0354 7.55809 15.0354Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_46749_616">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
      <Modal
        className={style.modal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={styleModal}>
            <div className={style.inside}>
              <h3>Заказать обратный звонок</h3>
              <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Имя"
                  {...register("firstName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[А-ЯЁ][а-яё]*$/,
                  })}
                />
                {errors?.firstName?.type === "required" && (
                  <p>Заполните поле</p>
                )}
                {errors?.firstName?.type === "maxLength" && (
                  <p>Имя не может превышать 20 символов</p>
                )}
                <input
                  placeholder="E-mail"
                  {...register("email", {
                    required: true,
                    maxLength: 40,
                    pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                  })}
                />
                {errors?.email?.type === "required" && <p>Заполните поле</p>}
                {errors?.email?.type === "pattern" && (
                  <p>Введена некорректная почта</p>
                )}
                {/* <input
                  placeholder="Телефон"
                  {...register("phone", {
                    required: true,
                    maxLength: 20,
                  })}
                />
                {errors?.phone?.type === "required" && <p>Заполните поле</p>} */}

                <button className={style.btn} type="submit">
                  Заказать звонок
                </button>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </header>
  );
};

export default Header;
