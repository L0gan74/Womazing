"use client"

import { NextPage } from "next";
import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Basket: NextPage = () => {
  const { cart } = useSelector(({ user }) => user);

  return (
    <div className={style.basket}>
      <h1 className="panel-header">Корзина</h1>
      <span className="panel">
        Главная - <p>Корзина</p>
      </span>
      <div className={style.main}>
        <div className={style.top}>
          <p>Товар</p>
          <p>Цена</p>
          <p>Количество</p>
          <p>Всего</p>
        </div>
        {!cart.length ? (
          <h1>Корзина пуста</h1>
        ) : (


          <div className={style.item}>
            <h2>{item.price}</h2>
            <span className={style.first}>
              <button type="button" className={style.close}>
                <Image src="/close.svg" width={12} height={12} alt="close" />
              </button>
              <Image
                className={style.image}
                src="/about-bottom.png"
                width={136}
                height={205}
                alt="imaage"
              />
              <p className={style.name}>Футболка USA</p>
            </span>
            <p className={style.price}>$129</p>
            <span className={style.quantity}>1</span>
            <p className={style.all}>$129</p>
          </div>
    
        )}

        <div className={style.bottom}>
          <div className={style.coupon}>
            <input type="text" placeholder="Введите купон" />
            <button type="button">Применить купон</button>
          </div>
          <button className={style.update} type="button">
            Обновить корзину
          </button>
        </div>
        <div className={style.total}>
          <div>
            <p className={style.subtotal}>Подытог: $129</p>
            <div className={style.totalFlex}>
              <span className={style.frame}>
                <p>Итого:</p>
                <p>$129</p>
              </span>
              <Link className={style.design} href="/pages/checkout">
                <button type="button">Оформить заказ</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
