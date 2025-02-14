import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href='https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Pixelify+Sans:wght@400..700&family=Play:wght@400;700&display=swap'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
