import Head from "next/head";
import React from "react";
import { CustomHead } from "../components/Head";

// TODO

// Read from query params
// Check security
// Get builds working

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <CustomHead />
      </Head>

      <main>
        <h1>Main</h1>
        <p> this is the main page</p>
      </main>
    </React.Fragment>
  );
}
