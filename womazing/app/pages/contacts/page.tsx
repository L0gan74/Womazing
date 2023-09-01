"use client";

import { NextPage } from "next";
import React from "react";
import style from "./style.module.css";

const ContactsPage: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <h1>Контакты</h1>
      <span className={style.panel}>
        Главная - <p>Контакты</p>
      </span>
      <div className={style.contacts}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577344.0897521477!2d36.72487032706509!3d55.58024991457623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1693388006016!5m2!1sru!2sru"
          loading="lazy"
        ></iframe>
        <div className={style.data}>
          <span>
            <p className={style.top}>Телефон</p>
            <p className={style.bottom}>+7 (495) 823-54-12</p>
          </span>
          <span>
            <p className={style.top}>E-mail</p>
            <p className={style.bottom}>info@sitename.com</p>
          </span>
          <span>
            <p className={style.top}>Адрес</p>
            <p className={style.bottom}>г. Москва, 3-я улица Строителей, 25</p>
          </span>
        </div>
        <h2>Напишите нам</h2>
        <form className={style.form}>
          <input type="text" placeholder="Имя" />
          <input type="email" placeholder="E-mail" />
          <input type="tek" placeholder="Телефон" />
          <textarea placeholder="Сообщение"></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default ContactsPage;
