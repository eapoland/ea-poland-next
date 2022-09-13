import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Button from "../Button";
import Image from "next/image";
import main1 from "../../public/assets/images/main1.jpg";
import main2 from "../../public/assets/images/main2.jpg";

const ContentPreview = () => {
  const { t } = useTranslation("common");
  return (
    <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2">
      <div className="flex justify-center">
        <Image src={main1} alt="" objectFit="cover" />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 p-4 md:p-8 lg:p-12 md:items-start">
        <h3 className="font-alt text-xl lg:text-2xl xl:text-3xl">
          {t("what_is_ea")}
        </h3>
        <p>{t("what_is_ea_desc")}</p>
        <Button href={"/aboutea"} text={t("readmore")} />
      </div>
      <div className="flex justify-center md:row-start-2 md:col-start-2">
        <Image src={main2} alt="" objectFit="cover" />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 p-4 md:p-8 lg:p-12 md:items-start md:row-start-2 md:col-start-1">
        <h3 className="font-alt text-xl lg:text-2xl xl:text-3xl">
          {t("how_do_we_work")}
        </h3>
        <p>{t("how_do_we_work_desc")}</p>
        <Button href={"ouractivities"} text={t("readmore")} />
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

export default ContentPreview;
