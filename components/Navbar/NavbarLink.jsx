import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarLink = ({ destination, title }) => {
  const router = useRouter();
  return (
    <Link
      href={destination}
      className={`font-bold uppercase text-xs leading-5 text-left px-2 py-4 transition duration-300 ease-in-out hover:underline ${
        router.pathname === destination ? "underline" : "no-underline"
      }`}
      style={{
        textDecorationThickness: "2px",
        textUnderlineOffset: "7px",
      }}
    >
      {title}
    </Link>
  );
};

export default NavbarLink;
