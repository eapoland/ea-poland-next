import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-20">
      <Head>
        <title>Fundacja Efektywny Altruizm</title>
        <meta name="description" content="Fundacja Efektywny Altruizm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        className="w-full px-16 py-32 grid grid-cols-1 md:grid-cols-2"
      >
        <div className="text-white flex flex-col gap-4 items-start">
          <h2 className="font-alt text-3xl lg:text-4xl leading-snug">
            Jak przynieść światu
            <br />
            <b>najwięcej dobra?</b>
          </h2>
          <p className="text-sm leading-normal">
            Jak czynić najwięcej dobra wykorzystując ograniczone środki?
            Efektywny Altruizm szuka odpowiedzi na to pytanie.
          </p>
          <Link href="/whoweare">
            <a>
              <button className="bg-primary py-3 px-7 text-sm uppercase font-bold">
                Dowiedz się więcej
              </button>
            </a>
          </Link>
        </div>
      </div>
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
