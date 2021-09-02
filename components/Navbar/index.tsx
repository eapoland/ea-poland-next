import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import eaLogo from "../../public/assets/images/efektywny-altruizm-logo.svg";
import eaLogoWhite from "../../public/assets/images/efektywny-altruizm-logo-white.svg";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggle = () => setExpanded(!isExpanded);
  const location = useRouter();

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`fixed w-full xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-lg sm:max-w-screen-sm h-20 mx-auto flex items-center justify-between flex-wrap bg-teal-500 p-0 transition duration-500 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6 ml-4">
        <Link href="/">
          <a className="relative w-40 h-4">
            <Image
              src={scrolled ? eaLogo : eaLogoWhite}
              alt="Logo Efektywnego Altruizmu"
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-299 border-team-400 hover:text-white hover:border-white"
          onClick={toggle}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          "w-full block flex-grow lg:flex lg:items-center lg:w-auto" +
          isExpanded
            ? " flex"
            : " hidden"
        }
      >
        <div
          className={`text-sm lg:flex-grow justify-center ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <NavbarLink destination="/about" title="O nas" />
          <NavbarLink destination="/activities" title="Działania" />
          <NavbarLink destination="/workshops" title="Warsztaty" />
          <NavbarLink destination="/act" title="Wspieraj" />
          <NavbarLink destination="/blog" title="Blog" />
          <NavbarLink destination="/contact" title="Kontakt" />
        </div>
      </div>
      <div>
        <a
          href="#"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Przekaz darowiznę
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
