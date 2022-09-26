import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Counter from "../components/Counter";

const Home: NextPage = () => {
  return (
    <>
      <Counter title={[1, 2, 3, 4, 5, 6]}></Counter>
    </>
  );
};

export default Home;
