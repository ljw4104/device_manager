import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="DATA">
        <h2 className="text-3xl font-bold">데이터페이지</h2>
      </Layout>
    </>
  );
};

export default Home;
