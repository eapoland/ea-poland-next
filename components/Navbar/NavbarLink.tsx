import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarLink = ({ destination, title }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Link href={destination}>
      <a
        className={`font-bold uppercase text-xs leading-5 text-left px-2 py-4 transition duration-300 ease-in-out hover:underline ${
          router.pathname === destination ? "underline" : "no-underline"
        }`}
        style={{
          textDecorationThickness: "2px",
          textUnderlineOffset: "7px",
        }}
      >
        {title}
      </a>
    </Link>
  );
};

export default NavbarLink;
