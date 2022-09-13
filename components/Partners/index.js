import React from "react";
import { useTranslation } from "react-i18next";
import okLogo from "../../public/assets/images/ok-logo.png";
import paretoLogo from "../../public/assets/images/pareto-logo.png";
import altruistoLogo from "../../public/assets/images/altruisto-logo.png";
import provegLogo from "../../public/assets/images/proveg-logo.png";
import schweitzerLogo from "../../public/assets/images/schweitzer-logo.png";
import Image from "next/image";

const Partners = () => {
  const { t } = useTranslation("common");

  return (
    <div className="bg-mono py-20 px-8">
      <h3 className="text-3xl font-alt text-center">{t("friends")}</h3>
      <div className="flex justify-center items-center gap-8 flex-wrap p-8">
        <div className="">
          <a
            href="https://www.otwarteklatki.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={okLogo} alt="OK logo" />
          </a>
        </div>
        <div className="">
          <a
            href="https://www.schweitzer.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={schweitzerLogo} alt="Albert Schweitzer logo" />
          </a>
        </div>
        <div className="">
          <a
            href="https://proveg.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={provegLogo} alt="ProVeg logo" />
          </a>
        </div>
        <div className="">
          <a
            href="https://altruisto.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={altruistoLogo} alt="Altruisto logo" />
          </a>
        </div>
        <div className="">
          <a
            href="https://optimumpareto.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={paretoLogo} alt="Pareto logo" />
          </a>
        </div>
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
export default Partners;
