import React from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

// type CategoryProps = {
//   value: number;
//   onChangeCaregory: (idx: number) => void;
// };

// const category = ["Все", "Пальто", "Свитшоты", "Кардиганы", "Толстовки"];

const Category: React.FC = () => {
  const { list } = useSelector(({ categories }) => categories);

  console.log("list", list);

  return (
    <div className={style.category}>
      {list.map(({ id, name }) => (
        <Link href={`/pages/shop/categories/${id}`} key={id}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Category;
