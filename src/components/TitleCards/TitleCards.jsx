import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  // const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWExMzc4MWEzMTY4ZDVhYjY3YzFlZGE1ZWEyNTk3OCIsIm5iZiI6MTcyNzYyOTM4My44NTczOTcsInN1YiI6IjY2Zjk4NmVhN2YxM2I3YjEyYWEyNWE1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b9cLGq_Z9wzW4Q7YAnB6B7ZTuisTPrQW45koM7p8Y7I",
    },
  };

  // const handleWheel = (event) => {
  //   event.preventDefault();
  //   cardsRef.current.scrollLeft += event.deltaY;
  // };

  // fetch movie data from the API based on the category
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    // cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className={`mt-12 mb-7 ${title ? ``:`hidden lg:block`}`}>
      <h2 className="text-lg font-semibold mb-3">
        {title ? title : "Popular on Netflix"}
      </h2>
      <div
        className="flex gap-3 overflow-x-scroll scrollbar-hide"
        // ref={cardsRef}
      >
        {apiData.map(({ original_title, backdrop_path, id }) => (
          <Link
            to={`/player/${id}`}
            key={id}
            className="relative cursor-pointer"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt=""
              className="w-52 sm:w-60 rounded object-cover"
            />
            <p className="absolute bottom-2 right-2 text-white text-sm">
              {original_title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
