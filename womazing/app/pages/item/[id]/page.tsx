"use client";

import { Metadata } from "next";
import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import { Root } from "@/interface/item.interface";
import { useAppDispatch } from "@/app/store/hooks";
import { addItemToCart } from "@/app/store/user/user";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: id,
    description: "Описание карточки товара по id",
  };
}

async function idNews<Root>(id: string) {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );

  return response.json();
}

export default async function ItemPage({ params: { id } }: Props) {
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

  const [sizesBtn, setSizeBtn] = React.useState(null);

  const SIZES = ["S", "M", "L"];

  const handleButtonClick = (index: any) => {
    setSizeBtn(index === sizesBtn ? null : index);
  };

  const item = await idNews(id);
  return (
    <div className={style.item}>
      <h1>{item.title}</h1>
      <span className={style.panel}>
        Главная — {item.category.name} — <p>{item.title}</p>
      </span>
      <div className={style.wrapper}>
        <Image src={item.images[0]} width={536} height={729} alt={item.title} />
        <div className={style.right}>
          <h3>${item.price}</h3>
          <p className={style.size}>Выберите размер</p>
          <div className={style.sizeDiv}>
            {SIZES.map((size, index) => (
              <button
                //@ts-ignore
                onClick={() => handleButtonClick(index)}
                className={index === sizesBtn ? "activeBtn" : ""}
                key={index}
                type="button"
              >
                {size}
              </button>
            ))}
          </div>
          <div className={style.basket}>
            <span>1</span>
            <button onClick={addToCart} type="button">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
      <h3 className={style.description}>{item.description}</h3>
    </div>
  );
}
