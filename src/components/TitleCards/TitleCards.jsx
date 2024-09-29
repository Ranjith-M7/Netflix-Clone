import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import cardsData from "../../assets/CardsData";

const TitleCards = () => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>Popular on Netflix</h2>
      <div className="card-list" ref={cardsRef}>
        {cardsData.map(({ image, name }, index) => (
          <div key={index} className="card">
            <img src={image} alt="" />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
