import { NextPage } from "next";
import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <h1>О бренде</h1>
      <span className={style.panel}>
        Главная - <p>О бренде</p>
      </span>
      <div className={style.about}>
        <div className={style.top}>
          <Image src="/about-top.png" width={442} height={547} alt="image" />
          <span className={style.text}>
            <h3>Идея и женщина</h3>
            <p>
              Womazing была основана в 2010-ом и стала одной из самых успешных
              компаний нашей страны. Как и многие итальянские фирмы, Womazing
              остаётся семейной компанией, хотя ни один из членов семьи не
              является модельером.
            </p>
            <p>
              Мы действуем по успешной формуле, прибегая к услугам известных
              модельеров для создания своих коллекций. Этот метод был описан
              критиком моды Колином Макдауэллом как форма дизайнерского
              со-творчества, характерная для ряда итальянских prêt-a-porter
              компаний.{" "}
            </p>
          </span>
        </div>
        <div className={style.bottom}>
          <span className={style.text}>
            <h3>Магия в деталях</h3>
            <p>
              Первый магазин Womazing был открыт в маленьком городке на севере
              страны в 2010-ом году. Первая коллекция состояла из двух пальто и
              костюма, которые были копиями парижских моделей.
            </p>
            <p>
              Несмотря на то, что по образованию основательница была адвокатом,
              ее семья всегда была тесно связана с шитьём (прабабушка
              основательницы шила одежду для женщин, а мать основала
              профессиональную школу кроя и шитья). Стремление производить
              одежду для масс несло в себе большие перспективы, особенно в то
              время, когда высокая мода по-прежнему доминировала, а рынка
              качественного prêt-a-porter попросту не существовало.{" "}
            </p>
          </span>
          <Image src="/about-bottom.png" width={442} height={547} alt="image" />
        </div>
        <Link href="/pages/shop" className={style.link}>
          Перейти в магазин
        </Link>
      </div>
    </div>
  );
};

export default About;
