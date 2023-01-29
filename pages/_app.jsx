import "../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";
import PlausibleProvider from "next-plausible";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }) {
  return (
    <>
      <PlausibleProvider domain="deutz.dev">
        <Head>
          <title>Lukas&apos; Website</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </PlausibleProvider>
    </>
  );
}

export default App;
