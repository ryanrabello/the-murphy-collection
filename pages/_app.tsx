import React from "react";
import appStyles from "../styles/app.module.css";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: any) {
  return (
    <React.Fragment>
      {/*<div className={appStyles.navbar}>*/}
      {/*  <div>*/}
      {/*    <h4>The Murphy Collection</h4>*/}
      {/*    /!*<NextLink href={"/"} as={"/"}>*!/*/}
      {/*    /!*  <a alt-label="Navigate to root"></a>*!/*/}
      {/*    /!*</NextLink>*!/*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <img*/}
      {/*      src={process.env.basePath + "/the-murphy-collection.png"}*/}
      {/*      height={"50px"}*/}
      {/*      alt="The Murphy Collection Logo"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className={appStyles.content}>
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  );
}

export default MyApp;
