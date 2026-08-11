import "../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lukas&apos; Website</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}

export default App;
