import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return <div className="m-5">
    <Header></Header>
    <Footer></Footer>
  </div>;
}
