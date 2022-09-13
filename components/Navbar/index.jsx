import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import eaLogo from "../../public/assets/images/efektywny-altruizm-logo.svg";
import NavbarLink from "./NavbarLink";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons";
import NavbarSocialLink from "./NavbarSocialLink";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { t } = useTranslation("common");

  const toggle = () => setExpanded(!isExpanded);

  return (
    <nav className="top-0 fixed w-full xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm h-20 mx-auto flex items-stretch justify-between flex-wrap p-0 transition duration-500 bg-white text-black">
      <div className="block lg:hidden">
        <button
          className="px-8 bg-white text-black text-xs w-full h-full"
          onClick={toggle}
        >
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>
      </div>
      <div className="flex items-center flex-shrink-0  mr-6 ml-4 lg:order-1">
        <Link href="/">
          <a className="relative w-40 h-16">
            <Image
              src={eaLogo}
              alt="Logo Efektywnego Altruizmu"
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <div className="lg:order-3 bg-secondary flex items-center">
        <a
          href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=FFLJ8KDN5CAUA"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="hidden lg:block px-8  text-black text-xs font-bold uppercase font-sans">
            {t("donate")}
          </div>
          <div className="hidden sm:flex lg:hidden text-xs uppercase font-bold px-8 items-center gap-2">
            <FontAwesomeIcon icon={faHeart} className="text-lg" />
            {"  "}
            {t("support")}
          </div>
        </a>
      </div>
      <div
        className={`w-full block flex-grow bg-primary lg:bg-white text-white lg:text-black lg:flex lg:items-center lg:w-auto lg:order-2 ${
          isExpanded ? " flex" : " hidden"
        }`}
      >
        <div className="text-sm justify-center w-full lg:w-unset flex flex-col items-center lg:flex-grow lg:flex-row gap-2 xl:gap-3">
          <NavbarLink destination="/aboutea" title={t("aboutea")} />
          <NavbarLink destination="/aboutus" title={t("aboutus")} />
          <NavbarLink destination="/act" title={t("support")} />
          <NavbarLink destination="/blog" title={t("blog")} />
          <NavbarLink destination="/contact" title={t("contact")} />
          <div className="flex gap-2 lg:gap-3 items-center">
            <NavbarSocialLink
              destination="https://www.facebook.com/efektywnyaltruizmfundacja"
              icon={faFacebookSquare}
            />
            <NavbarSocialLink
              destination="https://www.instagram.com/efektywnyaltruizm/"
              icon={faInstagramSquare}
            />
            <NavbarSocialLink
              destination="https://www.linkedin.com/company/efektywnyaltruizm/"
              icon={faLinkedinIn}
            />
            <NavbarSocialLink
              destination="https://www.youtube.com/channel/UCj6HkTu_5nYypCRKc-7y27A"
              icon={faYoutube}
            />
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default Navbar;
