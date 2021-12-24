import Head from "next/head";
import { useRouter } from "next/router";

import React from "react";
import { CustomHead } from "../components/Head";
import style from "../styles/xmasScan.module.css";
import { ExternalLink } from "../components/Link";

export default function Home() {
  const { query } = useRouter();

  const address = query.address;
  const key = query.key;
  const tokenID = query.tokenID;
  const contract = query.contract;

  const link = `https://opensea.io/assets/matic/${contract}/${tokenID}`;

  return (
    <React.Fragment>
      <Head>
        <CustomHead title={"QR Scan - The Murphy Collection"} />
      </Head>
      <main className={style.mainWrapper}>
        {query.address && query.key ? (
          <>
            <h1>Information about your NFT</h1>
            <p>You can see your NFT on Opensea using the link below.</p>

            <p>
              <ExternalLink href={link}>Open your NFT</ExternalLink>
              <ExternalLink
                className={"bx--btn--tertiary"}
                href={"https://opensea.io/collection/the-murphy-collection"}
              >
                View all Murphy NFTs
              </ExternalLink>
            </p>

            <h1>Information about your wallet</h1>
            <p>
              <strong>Wallet Addres</strong> <br />
              <pre>{address}</pre>
            </p>
            <p>
              <strong>Wallet Private Key (Treat this like a password)</strong>
              <br />
              <pre>{key}</pre>
            </p>
          </>
        ) : (
          <p> Unable to load your Murphy wallet.</p>
        )}
      </main>
    </React.Fragment>
  );
}
