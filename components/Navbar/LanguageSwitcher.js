import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const LanguageSwitcher = () => {
  const router = useRouter();

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "pl" ? "en" : "pl";

  return (
    <button
      onClick={() => onToggleLanguageClick(changeTo)}
      className="leading-5 text-left px-2 py-4"
    >
      <div>
        {changeTo === "en" ? (
          <Image
            src="/assets/images/gb.svg"
            width={20}
            height={15}
            alt="Switch to English"
          />
        ) : (
          <Image
            src="/assets/images/pl.svg"
            width={20}
            height={15}
            alt="Zmień na polski"
          />
        )}
      </div>
    </button>
  );
};

export default LanguageSwitcher;
