import { useTranslation } from "next-i18next";
import React from "react";

const Quote = () => {
  const { t } = useTranslation("common");
  return (
    <div
      className="py-20 px-8"
      style={{
        background: `url('/assets/images/quote.png') bottom left no-repeat, #fafafa no-repeat`,
      }}
    >
      <div className="w-full sm:w-5/6 mx-auto">
        <h3 className="text-xl lg:text-2xl xl:text-4xl font-alt leading-loose lg:leading-loose xl:leading-loose text-left tracking-tight mb-4">
          {t("home_quote")}
        </h3>
        <p className="text-left italic font-alt text-xl lg:text-2xl xl:text-3xl font-normal">
          - Derek Thompson
        </p>
      </div>
    </div>
  );
};

export default Quote;
