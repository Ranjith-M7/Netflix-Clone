import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero-banner.jpeg";
import hero_title from "../../assets/hero-title.png";
import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="title-img" />
          <p>
            Transformers: Rise of the Beasts is a 2023 American science fiction
            action film based on Hasbro's Transformers toy line, and primarily
            influenced by its Beast Wars sub-franchise.
          </p>
          <div className="hero-btns">
            <button className="btn light-btn">
              <FaPlay size={20} className="" />
              Play
            </button>
            <button className="btn dark-btn">
              <MdInfoOutline size={20} className="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Picks for You"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
