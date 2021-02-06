import Head from "next/head";
import Layout from "../components/Layout";
import { GlobalStyled } from "../styled/GlobalStyled";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Next - What's Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GlobalStyled />
        <Layout />
      </main>
    </div>
  );
}
