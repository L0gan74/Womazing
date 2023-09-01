import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import Navigation from "./nav";

const Footer: React.FC = () => {
  const navLink = [
    { label: "Главная", href: "/" },
    { label: "Магазин", href: "/pages/shop" },
    { label: "О бренде", href: "/pages/about " },
    { label: "Конакты", href: "/pages/contacts" },
  ];
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <Image src="/logo.svg" width={139} height={25} alt="logo" />
        <nav className={style.nav}>
          <Navigation navLink={navLink} />
        </nav>
        <span className={style.span}>
          <p>+7 (495) 823-54-12</p>
          <p>hello@womazing.com</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
