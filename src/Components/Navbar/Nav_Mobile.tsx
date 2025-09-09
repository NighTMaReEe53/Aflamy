import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import {
  RiMovie2Line,
  RiMovieAiLine,
  RiMovieLine,
  RiUserFollowLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Nav_Mobile = () => {
  const [active, setActive] = useState<
    "home" | "movie" | "tv" | "actor" | "soon"
  >("home");

  return (
    <ul
      className={`transition-transform delay-200 gap-5 lg:hidden flex fixed bottom-0 z-50 w-[100%] bg-[#0c081c8c] backdrop-blur-md justify-center items-center h-[85px]`}
      onClick={(e) => e.stopPropagation()}
    >
      <li>
        <Link
          to={"/"}
          className={`text-[13px] flex-col flex  items-center gap-1 ${
            active === "home"
              ? "text-[var(--yellowColor)] font-bold transition-all"
              : "text-[#FFF9] font-medium"
          } `}
          onClick={() => setActive("home")}
        >
          <IoHomeOutline className="relative top-[-4px] text-[30px] lg:text-[25px]" />
          الرئيسية
        </Link>
      </li>

      <li>
        <Link
          to={"/movie"}
          onClick={() => setActive("movie")}
          className={`text-[13px] flex-col flex  items-center gap-1 ${
            active === "movie"
              ? "text-[var(--yellowColor)] font-bold transition-all"
              : "text-[#FFF9] font-medium"
          }`}
        >
          <RiMovie2Line className="relative top-[-4px] text-[30px] lg:text-[25px]" />
          أفلام
        </Link>
      </li>
      <li>
        <Link
          to={"/tv"}
          className={`text-[13px] flex-col flex  items-center gap-1 ${
            active === "tv"
              ? "text-[var(--yellowColor)] font-bold transition-all"
              : "text-[#FFF9] font-medium"
          }`}
          onClick={() => setActive("tv")}
        >
          <RiMovieLine className="relative top-[-4px] text-[30px] lg:text-[25px]" />
          مسلسلات
        </Link>
      </li>
      <li>
        <Link
          to={"/soon"}
          className={`text-[13px] flex-col flex  items-center gap-1 ${
            active === "soon"
              ? "text-[var(--yellowColor)] font-bold transition-all"
              : "text-[#FFF9] font-medium"
          }`}
          onClick={() => setActive("soon")}
        >
          <RiMovieAiLine className="relative top-[-4px] text-[30px] lg:text-[25px]" />
          في المستقبل
        </Link>
      </li>
      <li>
        <Link
          to={"/actor"}
          className={`text-[13px] flex-col flex  items-center gap-1 ${
            active === "actor"
              ? "text-[var(--yellowColor)] font-bold transition-all"
              : "text-[#FFF9] font-medium"
          }`}
          onClick={() => setActive("actor")}
        >
          <RiUserFollowLine className="relative top-[-4px] text-[30px] lg:text-[25px]" />
          الممثلين
        </Link>
      </li>
    </ul>
  );
};

export default Nav_Mobile;
