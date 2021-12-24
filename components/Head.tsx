import React from "react";

export function CustomHead({ title = "StarDate" }) {
  return (
    <React.Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* SEO */}
      <meta property="og:title" content="The Murphy Collection" />
      <meta
        property="og:description"
        content="A collection of Murphy themed NFTs."
      />
      <meta
        property="og:image"
        content={`${process.env.basePath}/star_date.jpg`}
      />
      <meta
        property="og:url"
        content="https://ryanrabello.github.io/the-murphy-collection/"
      />
      <meta
        name="twitter:card"
        content={`${process.env.basePath}/the-murphy-collection.png`}
      />

      <meta property="og:site_name" content="The Murphy Collection" />
      <meta
        name="twitter:image:alt"
        content="A collection of Murphy themed NFTs."
      />

      {/* PWA */}
      <meta name="theme-color" content="#161616" />

      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={process.env.basePath + "/apple-touch-icon.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={process.env.basePath + "/favicon-32x32.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={process.env.basePath + "/favicon-16x16.png"}
      />
      <link rel="manifest" href={process.env.basePath + "/site.webmanifest"} />
      <link
        rel="mask-icon"
        href={process.env.basePath + "/safari-pinned-tab.svg"}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href={process.env.basePath + "/favicon.ico"} />
      <title>{title}</title>
    </React.Fragment>
  );
}
