import { useEffect } from "react";
import { useRouter } from "next/router";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import * as ga from "../lib/ga";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/styles.css";
import { appWithTranslation } from "next-i18next";

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
    <div className="container mx-auto">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(MyApp);
