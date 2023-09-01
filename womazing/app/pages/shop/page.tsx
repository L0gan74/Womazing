"use client";

import React from "react";
import style from "./style.module.css";
import { NextPage } from "next";
import Category from "./category";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setCategoryId } from "@/app/store/slices/filter";
import axios from "axios";
import ProductItem from "@/app/components/main/item";
import { RootData } from "@/interface/item.interface";
import { getCategories } from "@/app/store/slices/categories";
import { getProducts } from "@/app/store/slices/product";

const ShopPages: NextPage = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  const { list } = useAppSelector(({ products }) => products);

  // const categoryId = useAppSelector((state) => state.filter.categoryId);

  // const [data, setData] = React.useState([]);

  // React.useEffect(() => {
  //   const category = categoryId > 0 ? `categoryId=${categoryId}` : "";
  //   const getItems = async () => {
  //     const response = await axios.get<RootData[], any>(
  //       `http://localhost:3001/items?_sort=id&_order=desc&${category}`
  //     );
  //     setData(response.data);
  //   };
  //   getItems();
  // }, [categoryId]);

  // const onChangeCaregory = (idx: number) => {
  //   dispatch(setCategoryId(idx));
  // };

  return (
    <div className={style.wrapper}>
      <h1>Магазин</h1>
      <span className={style.panel}>
        Главная - <p>Магазин</p>
      </span>
      {/* <Category value={categoryId} onChangeCaregory={onChangeCaregory} />
      <div className={style.container}>
        {data.map((item, id) => (
          <ProductItem item={item} key={id} />
        ))}
      </div> */}
      <Category />
      <div className={style.container}>
        <ProductItem products={list} amount={10} />
      </div>
    </div>
  );
};

export default ShopPages;
