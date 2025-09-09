import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCloseSharp, IoHomeOutline, IoSearchSharp } from "react-icons/io5";
import {
  RiMovie2Line,
  RiMovieAiLine,
  RiMovieLine,
  RiUserFollowLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { FullscreenButton } from "../UI/FullScreen";

const Nav = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [active, setActive] = useState<
    "home" | "movie" | "tv" | "actor" | "soon"
  >("home");

  const ShowWhenScroll = () => {
    setIsScroll(window.scrollY > 60);
  };

  useEffect(() => {
    window.addEventListener("scroll", ShowWhenScroll);

    return () => window.removeEventListener("scroll", ShowWhenScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-[100%] z-10 ${
        isScroll && "backdrop-blur-md bg-[#0003]"
      }`}
    >
      <div className="container px-2 lg:px-20 mx-auto min-h-[72px] flex items-center justify-between">
        <span className="block lg:hidden">
          <FullscreenButton />
        </span>

        <Link to={"/"} className="flex items-center gap-3">
          <img src="logo.png" className="w-[40px]" alt="" />
          <h2 className="text-3xl font-bold">
            أفــل<span className="text-[var(--yellowColor)]">امــي</span>
          </h2>
        </Link>
        <ul
          className={`transition-transform delay-200 gap-5 hidden lg:flex`}
          onClick={(e) => e.stopPropagation()}
        >
          <span
            onClick={() => setIsShow(!isShow)}
            className="absolute lg:hidden rounded-md top-[10px] left-[10px] w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-2 border-rose-700 text-white text-[34px]"
          >
            <IoCloseSharp />
          </span>
          <li>
            <Link
              to={"/"}
              className={`text-[23px] lg:text-[15px] flex  items-center gap-1 ${
                active === "home"
                  ? "text-[var(--yellowColor)] font-bold transition-all"
                  : "text-[#FFF9] font-medium"
              } `}
              onClick={() => setActive("home")}
            >
              <IoHomeOutline className="relative top-[-4px] text-[30px] lg:text-[25px]" />
              الصفحة الرئيسية
            </Link>
          </li>

          <li>
            <Link
              to={"/movie"}
              onClick={() => setActive("movie")}
              className={`text-[23px] lg:text-[15px] flex  items-center gap-1 ${
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
              className={`text-[23px] lg:text-[15px] flex  items-center gap-1 ${
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
              className={`text-[23px] lg:text-[15px] flex  items-center gap-1 ${
                active === "soon"
                  ? "text-[var(--yellowColor)] font-bold transition-all"
                  : "text-[#FFF9] font-medium"
              }`}
              onClick={() => setActive("soon")}
            >
              <RiMovieAiLine className="relative top-[-4px] text-[30px] lg:text-[25px]" />
              قادم في المستقبل
            </Link>
          </li>
          <li>
            <Link
              to={"/actor"}
              className={`text-[23px] lg:text-[15px] flex  items-center gap-1 ${
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
        <div className="search flex items-center gap-3">
          <span>
            <IoSearchSharp
              size={25}
              className="text-[var(--whiteColor)] cursor-pointer"
            />
          </span>
          <span>
            <FaRegHeart
              size={25}
              className="text-[var(--yellowColor)] cursor-pointer"
            />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
