import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Menu/>
      <Banner/>
      <Banner2/>
      <Banner3/>
      <Footer/>
    </>
  );
}
