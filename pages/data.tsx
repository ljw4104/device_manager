import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="DATA">
        <div className="h-[80vh] overflow-y-scroll p-4 overflow-auto"></div>
      </Layout>
    </>
  );
};

export default Home;
