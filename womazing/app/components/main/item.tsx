import { IItem, IItemData, RootData } from "@/interface/item.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import main from "./main.module.css";

const ProductItem: React.FC<IItemData> = ({ products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <>
      {list.map(({ id, title,price }) => (
        <Link key={id} href={`/pages/item/${id}`}>
          <div className={main.item}>
            {/* <Image src={images} width={350} height={400} alt={title} /> */}
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductItem;
