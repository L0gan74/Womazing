"use client";

import React from "react";
import style from "./style.module.css";
import { NextPage } from "next";

import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

interface IFormInput {
  firstName: string;
  email: string;
  phone: string;
  example: string;
}

const Checkout: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  };

  console.log(watch("example"));

  return (
    <div className={style.checkout}>
      {/* <h1 className="panel-header">Оформление заказа</h1>
      <span className="panel">
        Главная - <p>Оформление заказа</p>
      </span>
      <div className={style.wrapper}>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.left}>
            <h3>Данные покупателя</h3>
            <input
              placeholder="Имя"
              {...register("firstName", {
                required: true,
                maxLength: 20,
                pattern: /^[А-ЯЁ][а-яё]*$/,
              })}
            />
            {errors?.firstName?.type === "required" && (
              <p className={style.error}>Заполните поле</p>
            )}
            {errors?.firstName?.type === "maxLength" && (
              <p className={style.error}>Имя не может превышать 20 символов</p>
            )}
            <input
              placeholder="E-mail"
              {...register("email", {
                required: true,
                maxLength: 40,
                pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
              })}
            />
            {errors?.email?.type === "required" && (
              <p className={style.error}>Заполните поле</p>
            )}
            {errors?.email?.type === "pattern" && (
              <p className={style.error}>Только Английские буквы</p>
            )}
            <input type="tel" placeholder="Телефон" />
            <h3>Адрес получателя</h3>
            <input type="tel" placeholder="Город" />
            <input type="tel" placeholder="Улица" />
            <input type="tel" placeholder="Дом" />
            <input type="tel" placeholder="Квартира" />
            <h3>Комментарий</h3>
            <textarea placeholder="Поле не обязательное*"></textarea>
          </div>
          <div className={style.right}>
            <h3>Ваш заказ</h3>
            <span className={style.item}>
              <p className={style.product}>Товар</p>
              <p className={style.product}>Всего</p>
            </span>
            <span className={style.item}>
              <p className={style.product}>Футболка USA</p>
              <p className={style.product}>$129</p>
            </span>
            <span className={style.total}>
              <p>Итого</p>
              <p>$129</p>
            </span>
            <div className={style.payment}>
              {/* <h3>Способы оплаты</h3> 
              <button type="submit">Разместить заказ</button>
            </div>
          </div>
        </form>
      </div> */}
      <h1 className="panel-header">Заказ получен</h1>
      <span className="panel">
        Главная - Оформление заказа -<p> Заказ получен</p>
      </span>
      <div className={style.wrapper}>
        <div className={style.success}>
          <div className={style.left}>
            <Image src="/checked.svg" width={72} height={84} alt="img" />
            <span>
              <h3>Заказ успешно оформлен</h3>
              <p>Мы свяжемся с вами в ближайшее время!</p>
            </span>
          </div>
          <Link href="/">Перейти на главную</Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
