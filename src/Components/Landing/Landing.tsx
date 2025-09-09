import axios from "axios";
import { useEffect, useState } from "react";
import { API_HEADER } from "../Config/Index";
import type { IGenres, ILanding } from "../../interfaces";
import { motion } from "motion/react";
import "./landing.css";
import { FaStar } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Landing = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [MOVIE, setIsMovie] = useState<ILanding[]>([]);
  const [Genres, setIsGenerse] = useState<IGenres[]>([]);

  const GET_MOVIES = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?language=ar`,
        {
          headers: {
            Authorization: `Bearer ${API_HEADER}`,
          },
        }
      );

      setIsMovie(data.results);
    } finally {
      setIsLoading(false);
    }
  };

  const GET_GENERSE = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=ar&api_key=7beeb8ba591fbda25b81a962dbebf935"
    );
    setIsGenerse(data.genres);
  };

  useEffect(() => {
    GET_MOVIES();
    GET_GENERSE();
  }, []);

  if (isLoading)
    return (
      <h2 className="h-[100vh] flex bg-[#FFF1] backdrop-blur-sm animate-pulse items-center justify-center">
        <span className="loader"></span>
      </h2>
    );

  const THE_MOVIE = MOVIE.map((movie) => {
    return (
      <div className="box" key={movie.id}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt=""
        />
        <div className="text w-[100%] z-30">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-3xl lg:text-5xl font-bold leading-15"
          >
            {movie.title ? movie.title : movie.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className=" text-[13px] md:text-[15px] lg:text-[18px] w-[350px] md:w-[400px] lg:w-[700px] mx-auto leading-8"
          >
            {movie.overview}
          </motion.p>
          <div className="flex gap-5 justify-center">
            {movie.genre_ids.map((id) => {
              return Genres.map((item) => {
                return item.id === id ? (
                  <motion.p
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.7 }}
                    className="relative not-[:last-child]:after:bg-[var(--yellowColor)] not-[:last-child]:after:left-[-13px] not-[:last-child]:after:top-[50%] not-[:last-child]:after:translate-y-[-50%] not-[:last-child]:after:w-2 after:h-2 not-[:last-child]:after:absolute not-[:last-child]:after:rounded-full text-[20px]"
                  >
                    {" "}
                    {item.name}
                  </motion.p>
                ) : (
                  ""
                );
              });
            })}
          </div>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center relative gap-2"
          >
            بتاريح :{movie.release_date ? movie.release_date : "2025 "} ||{" "}
            <span className="inline-flex gap-1 items-center text-[var(--yellowColor)]">
              {movie.vote_average.toFixed(1)}{" "}
              <FaStar size={22} className="relative top-[-3px]" />
            </span>
          </motion.span>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="main-btn cursor-pointer flex items-center  justify-center gap-2 mx-auto border-0.5 ring-[0.5px] bg-[#FFF2] font-bold w-[300px] py-3 rounded-sm"
          >
            <FiSend size={25} color="var(--yellowColor)" />
            تعرف علي المزيد
          </motion.button>
        </div>
      </div>
    );
  });

  return <div className="landing flex">{THE_MOVIE}</div>;
};

export default Landing;
