import axios from "axios";
import { useEffect, useState, type ReactNode } from "react";
import { API_HEADER } from "../Config/Index";
import type { ILanding } from "../../interfaces";
import "./show.css";

import { Swiper, SwiperSlide } from "swiper/react";
// IMPORT SWIPER
import "swiper/css";

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaRegEye, FaStar } from "react-icons/fa";

interface IText {
  name: string | ReactNode;
  URL: string;
}

const Show = ({ name, URL }: IText) => {
  const [data, setData] = useState<ILanding[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const GET_DATA = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${API_HEADER}`,
        },
      });

      setData(data.results);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GET_DATA();
  }, [URL]);

  const MOVIE = data.map((el) => {
    return (
      <SwiperSlide
        className="box relative before:rounded-md cursor-pointer before:w-[100%] before:h-[100%] before:absolute "
        key={el.id}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {el.poster_path ? (
            <>
              <motion.img
                src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                alt=""
                draggable={false}
                className="rounded-md w-[100%] min-h-[225px]"
              />
              <span className="absolute top-[10px] left-[10px] font-bold bg-[#0008] text-[12px] w-[40px] flex justify-center items-center gap-1 text-center rounded-sm text-[var(--yellowColor)]">
                <FaStar size={10} className="relative top-[-1px]" />

                {el.vote_average ? el.vote_average.toFixed(1) : 5.3}
              </span>
            </>
          ) : (
            <div className="bg-[#FFF3] w-[100%] min-h-[225px] rounded-md animate-pulse"></div>
          )}
        </motion.div>
      </SwiperSlide>
    );
  });

  return (
    <div className="show">
      <div className="container px-2  my-3 mx-auto">
        <div className="content bg-[#1c1a2f] p-4 rounded-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl flex items-center gap-2 font-bold">
              {name}
            </h2>
            <Link
              to={"/"}
              className="flex items-center gap-1 font-bold text-[var(--yellowColor)] decoration-1 underline"
            >
              <FaRegEye size={22} />
              شاهد الكل
            </Link>
          </div>
          {loading ? (
            <h2 className="flex items-center justify-center gap-2 min-h-[150px]">
              جاري التحميل...
              <span className="loader"></span>
            </h2>
          ) : (
            <Swiper
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                922: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 7,
                  spaceBetween: 10,
                },
              }}
              spaceBetween={10}
            >
              {MOVIE}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

// #1c1a2f

export default Show;
