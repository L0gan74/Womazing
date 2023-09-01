"use client";

import React from "react";
import main from "./main.module.css";
import { useQuery } from "@tanstack/react-query";
import { RootData } from "@/interface/item.interface";
import ProductItem from "./item";
import Link from "next/link";
import Important from "./important/important";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { getProducts } from "@/app/store/slices/product";

const Main: React.FC = () => {
  // const { isLoading, data } = useQuery<RootData[]>({
  //   queryKey: ["items"],
  //   queryFn: () =>
  //     fetch("http://localhost:3001/items?_start=0&_end=3").then((res) =>
  //       res.json()
  //     ),
  // });

  // if (isLoading) return "Loading...";

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { list } = useAppSelector(({ products }) => products);

  return (
    <div className={main.container}>
      <h2>Новая коллекция</h2>
      <div className={main.wrapper}>
        {/* {data?.map((item, id) => (
          <ProductItem item={item} key={id} />
        ))} */}
        <ProductItem products={list} amount={3} />
      </div>
      <Link className={main.link} href="/pages/shop">
        <button className={main.button} type="button">
          Открыть магазин
        </button>
      </Link>
      <Important />
    </div>
  );
};

export default Main;
