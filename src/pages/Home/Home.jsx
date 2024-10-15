import React from "react";
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
      <div className="relative">
        <img src={hero_banner} alt="hero banner" className="mask-radial-fade w-full" />
        <div className="absolute w-full bottom-0 pl-[6%]">
          <img src={hero_title} alt="" className="hidden lg:block max-w-sm mb-5 sm:mb-8" />
          <p className="max-w-lg sm:max-w-2xl mb-5 text-sm sm:text-base lg:text-lg">
            Transformers: Rise of the Beasts is a 2023 American science fiction
            action film based on Hasbro's Transformers toy line, and primarily
            influenced by its Beast Wars sub-franchise.
          </p>
          <div className="flex gap-3 sm:gap-5 lg:mb-16">
            <button className="btn-light flex items-center gap-2 px-5 py-2 text-base font-semibold rounded-md border-0">
              <FaPlay  className="w-4 h-4 sm:w-6 sm:h-6" />
              Play
            </button>
            <button className="btn-dark flex items-center gap-2 px-5 py-2 text-base font-semibold rounded-md border-0">
              <MdInfoOutline  className="w-6 h-6" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="pl-[6%] sm:pl-[8%]">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Picks for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
