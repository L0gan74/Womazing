import React from "react";
import style from "./style.module.css";
import Image from "next/image";

const Important = () => {
  return (
    <div className={style.important}>
      <h2>Что для нас важно</h2>
      <div className={style.wrapper}>
        <div className={style.item}>
          <Image src="/important_1.svg" width={61} height={61} alt="image" />
          <h3>Качество</h3>
          <p>
            Наши профессионалы работают на лучшем оборудовании для пошива одежды
            беспрецедентного качества
          </p>
        </div>
        <div className={style.item}>
          <Image src="/important_2.svg" width={61} height={61} alt="image" />
          <h3>Скорость</h3>
          <p>
            Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
            единиц продукции в наших собственных цехах
          </p>
        </div>
        <div className={style.item}>
          <Image src="/important_3.svg" width={61} height={61} alt="image" />
          <h3>Ответственность</h3>
          <p>
            Мы заботимся о людях и планете. Безотходное производство и
            комфортные условия труда - все это Womazing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Important;
