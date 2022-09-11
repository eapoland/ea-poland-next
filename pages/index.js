import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <div className="mt-20">
      <Head>
        <title>Fundacja Efektywny Altruizm</title>
        <meta name="description" content="Fundacja Efektywny Altruizm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      TEST TEST
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
