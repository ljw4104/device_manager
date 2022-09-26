import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Counter from "../components/Counter";

const Home: NextPage = () => {
  return (
    <>
      <Counter title="카운터"></Counter>
    </>
  );
};

export default Home;
