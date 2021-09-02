import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
