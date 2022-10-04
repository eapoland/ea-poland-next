import { useEffect } from "react";
import { useRouter } from "next/router";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import * as ga from "../lib/ga";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/styles.css";
import { appWithTranslation } from "next-i18next";
import Footer from "../components/Footer";
import NewsletterForm from "../components/NewsletterForm";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="max-w-full xl:max-w-screen-xl mx-auto">
      <Navbar />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <NewsletterForm />
        <Footer />
      </div>
    </div>
  );
}

export default appWithTranslation(MyApp);
