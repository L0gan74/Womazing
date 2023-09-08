import { IItem, IItemData, RootData } from "@/interface/item.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import main from "./main.module.css";

//@ts-ignore
const ProductItem: React.FC<IItemData> = ({ products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <>
      {list.map(({ id, title, price, images }) => (
        <Link key={id} href={`/pages/item/${id}`}>
          <div className={main.item}>
            <Image src={images[0]} width={250} height={250} alt="img" />
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductItem;
