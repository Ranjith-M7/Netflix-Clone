import React, { useEffect, useState } from "react";
import "./Player.css";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    type: "",
    published_at: "",
    key: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWExMzc4MWEzMTY4ZDVhYjY3YzFlZGE1ZWEyNTk3OCIsIm5iZiI6MTcyNzYyOTM4My44NTczOTcsInN1YiI6IjY2Zjk4NmVhN2YxM2I3YjEyYWEyNWE1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b9cLGq_Z9wzW4Q7YAnB6B7ZTuisTPrQW45koM7p8Y7I",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <FaRegArrowAltCircleLeft
        className="previous-icon"
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        width={"90%"}
        height={"80%"}
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameborder="0"
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
