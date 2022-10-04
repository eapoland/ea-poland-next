import React from "react";
import { useTranslation } from "next-i18next";
import eaLogo from "../../public/assets/images/efektywny-altruizm-logo-white.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const year = new Date().getFullYear();

const Footer = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <footer className="bg-primary font-sans p-8 flex gap-12 lg:col-start-1 lg:col-end-3 lg:row-start-1">
      <div className="flex-1 flex flex-col items-center md:items-start">
        <div>
          <Image
            src={eaLogo}
            alt="Logo Efektywnego Altruizmu"
            width={155}
            height={90}
          />
        </div>
        <div className="text-white uppercase text-xs font-bold">
          <ul className="flex flex-wrap gap-4 mb-4 justify-center md:justify-start">
            <li>
              <Link href="/whoarewe">
                <a>{t("who_are_we")}</a>
              </Link>
            </li>
            <li>
              <Link href="/aboutea">
                <a>{t("aboutea")}</a>
              </Link>
            </li>
            {router.locale === "pl" && (
              <li>
                <Link href="/ouractivities">
                  <a>{t("our_activities")}</a>
                </Link>
              </li>
            )}
            <li>
              <Link href="/team">
                <a>{t("team")}</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>{t("blog")}</a>
              </Link>
            </li>
            {router.locale === "pl" && (
              <li>
                <Link href="/act">
                  <a>{t("support")}</a>
                </Link>
              </li>
            )}
            <li>
              <Link href="/contact">
                <a>{t("contact")}</a>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy">
                <a>{t("policy_privacy")}</a>
              </Link>
            </li>
            <li>
              <a href="https://drive.google.com/drive/folders/10TgWw_2vMKzcbRUn1HpMsqgmwoW9Dy0l?usp=sharing">
                {t("media_materials")}
              </a>
            </li>
          </ul>
          <p className="text-center font-bold md:text-left">
            © {year} {t("fea")}
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-1 items-center">
        <ul className="text-white uppercase font-bold text-xs flex flex-col gap-4">
          <li>Fundacja Efektywny Altruizm</li>
          <li>Plac Bankowy 2, 00-095 Warszawa</li>
          <li>KRS: 0000726237, REGON: 369951399, NIP: 5252746902</li>
          <li>ING Bank Śląski S.A.</li>
          <li>{t("account_number")}: PL 67 1050 1012 1000 0090 8040 3265</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
