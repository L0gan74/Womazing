"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type navLinks = {
  label: string;
  href: string;
};

type Props = {
  navLink: navLinks[];
};

const Navigation = ({ navLink }: Props) => {
  const pathname = usePathname();
  return (
    <>
      {navLink.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? "active" : ""}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
