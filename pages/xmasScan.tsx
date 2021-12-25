import Head from "next/head";
import { useRouter } from "next/router";

import React, { AnchorHTMLAttributes } from "react";
import { CustomHead } from "../components/Head";
import style from "../styles/xmasScan.module.css";
import { ExternalLink } from "../components/Link";

function InlineLink({
  href,
  children,
  ...other
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...other} href={href} target="_BLANK" referrerPolicy="no-referrer">
      {children}
    </a>
  );
}

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
            <h1>Congrats getting your Murphy NFT!</h1>
            <p>You can see your NFT on OpenSea using the button below.</p>

            <p>
              <ExternalLink href={link}>View your NFT</ExternalLink>
              <ExternalLink
                className={"bx--btn--tertiary"}
                href={"https://opensea.io/collection/the-murphy-collection"}
              >
                View all Murphy NFTs
              </ExternalLink>
            </p>

            <h2>Information about your wallet</h2>
            <h6>Wallet Address</h6>
            <div className={style.codeStyles}>{address}</div>
            <h6>Wallet Private Key (Treat this like a password)</h6>
            <div className={style.codeStyles}>{key}</div>

            <h2>How to access your wallet</h2>
            <p>
              <ol>
                <li>
                  1. Download{" "}
                  <InlineLink href={"https://metamask.io/"}>
                    Meta Mask
                  </InlineLink>{" "}
                  and create an account.
                </li>
                <li>
                  2. Click "Import Account" in the upper menu of meta mask to
                  add this wallet. Check out this{" "}
                  <InlineLink
                    href={
                      "https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-Account"
                    }
                  >
                    {" "}
                    "How to import into Meta Mask" Article
                  </InlineLink>
                  .
                </li>
                <li>
                  3. Log into{" "}
                  <InlineLink href={"https://opensea.io/"}>
                    OpenSea.io
                  </InlineLink>{" "}
                  using the meta mask account associated with the wallet you
                  imported.
                </li>
              </ol>
            </p>

            <h2>What is an NFT?</h2>
            <h4>Non-fungible token.</h4>
            <p>
              Right, sorry. “Non-fungible” more or less means that it’s unique
              and can’t be replaced with something else. For example, a dollar
              is fungible — trade one for another dollar, and you’ll have
              exactly the same thing. A one-of-a-kind trading card, however, is
              non-fungible. If you traded it for a different card, you’d have
              something completely different.
            </p>
            <p>
              Read more about NFTs at this{" "}
              <InlineLink
                href={
                  "https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq"
                }
              >
                "NFTs, explained" article
              </InlineLink>{" "}
              by the Verge.
            </p>
          </>
        ) : (
          <p> Unable to load your Murphy wallet.</p>
        )}
      </main>
    </React.Fragment>
  );
}
