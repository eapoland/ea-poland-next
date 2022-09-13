import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ScrollToTop from "../components/ScrollToTop";
import Hero from "../components/Hero";
import ReactModal from "react-modal";
import { Trans, useTranslation } from "next-i18next";
import { useState, useEffect } from "react";
import Link from "next/link";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Quote from "../components/Quote";

ReactModal.setAppElement("body");

export default function Home() {
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const modalShowed = window.sessionStorage.getItem("modal");
    if (modalShowed == null) {
      setIsOpen(true);
      window.sessionStorage.setItem("modal", true);
    }
  }, []);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="mt-20">
      <Head>
        <title>{t("fea")}</title>
        <meta name="description" content={t("fea")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScrollToTop />
      <ReactModal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex bg-white overflow-auto rounded outline-none p-5 w-full max-w-sm md:max-w-md"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
        closeTimeoutMS={500}
      >
        <div>
          <button
            className="cursor-pointer px-2 py-1 rounded-lg border-0 absolute right-0 top-0 self-end"
            onClick={toggleModal}
          >
            <FontAwesomeIcon icon={faXmark} size="2x" />
          </button>
          <h4 className="mb-3 mt-2 text-xl font-alt">
            <Trans i18nKey="modal_header" />
          </h4>
          <div className="mb-6">
            <Trans i18nKey="modal_content" />
          </div>
          <Link href="/blog/program-wprowadzajacy-do-ea">
            <a>
              <button className="bg-primary py-3 px-7 text-sm uppercase font-bold text-white">
                {t("modal_btn")}
              </button>
            </a>
          </Link>
        </div>
      </ReactModal>
      <Hero />
      <Quote />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
