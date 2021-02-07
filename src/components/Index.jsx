import Head from "next/head";
import Layout from "../components/Layout";
import { GlobalStyled, MainSec } from "../styled/GlobalStyled";

const IndexMain = ({ Title, Color, Heading }) => {
  return (
    <MainSec>
      <Head>
        <title>{Title ? Title : "Loading"} - What's Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GlobalStyled />
        <Layout
          Heading={Heading ? Heading : "Loading"}
          Color={Color ? Color : "blue"}
        />
      </main>
    </MainSec>
  );
};
export default IndexMain;
