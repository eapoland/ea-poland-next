import Link from "next/link";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation("common");
  return (
    <div
      style={{
        background: `linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.5452556022408963) 0%,
          rgba(9, 9, 121, 0) 90%,
          rgba(255, 255, 255, 0) 100%
        ), url('/assets/images/baner_alt.jpg') center no-repeat`,
        backgroundSize: "cover",
      }}
      className="w-full px-16 lg:px-24 py-32 lg:py-48 grid grid-cols-1 md:grid-cols-2"
    >
      <div className="text-white flex flex-col gap-4 items-start">
        <h2 className="font-alt text-3xl lg:text-4xl leading-snug">
          <Trans i18nKey="home_slider_header" />
        </h2>
        <p className="text-sm leading-normal">
          <Trans i18nKey="home_slider_desc" />
        </p>
        <Link href="/whoweare">
          <a>
            <button className="bg-primary py-3 px-7 text-sm uppercase font-bold">
              {t("findmore")}
            </button>
          </a>
        </Link>
      </div>
    </div>
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

export default Hero;
