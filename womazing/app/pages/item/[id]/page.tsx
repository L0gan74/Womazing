import { Metadata } from "next";
import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import { Root } from "@/interface/item.interface";

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
  const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);

  return response.json();
}

export default async function ItemPage({ params: { id } }: Props) {
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
          <button type="button" className={style.sizeBtn}>
            {item.size}
          </button>
          <div className={style.basket}>
            <span>1</span>
            <button type="button">Добавить в корзину</button>
          </div>
        </div>
      </div>
      <h3 className={style.description}>{item.description}</h3>
    </div>
  );
}
