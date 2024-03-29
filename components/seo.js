import Head from "next/head";

const Seo = ({ title }) => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000" />
      <meta name="msapplication-TileColor" content="#000" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <title>{title} | Jin Park</title>
      <meta name="description" content="Jin Park's portfolio" />
      <meta
        name="keywords"
        content="Jin, Jin Park, Portfolio, HTML, CSS, JavaScript, React, Next.js, Frontend"
      />
      <meta name="author" content="Jin Park" />
      <meta name="og:site_name" content="Jin Park's portfolio" />
      <meta name="og:title" content={`${title} | Jin Park`} />
      <meta name="og:description" content="Jin Park's portfolio" />
      <meta name="og:type" content="website" />
      <meta name="og:url" content="https://www.parkjin.dev/" />
      <meta name="og:image" content="/android-chrome-512x512.png" />
    </Head>
  );
};

export default Seo;
