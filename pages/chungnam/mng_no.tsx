import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import Layout from "../../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [mng_no, setMng_no] = useState("");
  const router = useRouter();

  useEffect(() => {
    // setMng_no(router.query.mng_no?.toString() || []);
  }, [router.query]);
  return (
    <Layout title="mng_no">
      <div>{mng_no}</div>
    </Layout>
  );
}

export default MyApp;
