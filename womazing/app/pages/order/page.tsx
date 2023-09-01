import { NextPage } from "next";
import React from "react";
import style from "./style.module.css";

const Order: NextPage = () => {
  return (
    <div>
      <h1 className="panel-header">Оформление заказа</h1>
      <span className="panel">
        Главная - <p>Оформление заказа</p>
      </span>
    </div>
  );
};

export default Order;
