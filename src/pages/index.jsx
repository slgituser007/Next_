import Head from "next/head";
import Layout from "../components/Layout";
import { GlobalStyled, MainSec } from "../styled/GlobalStyled";
export default function Home() {
  return (
    <MainSec>
      <Head>
        <title>Next - What's Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GlobalStyled />
        <Layout Heading={"Next"} Color={"#0099FF"} />
      </main>
    </MainSec>
  );
}
