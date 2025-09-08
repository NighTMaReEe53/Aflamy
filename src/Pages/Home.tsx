import { GiFire } from "react-icons/gi";
import Landing from "../Components/Landing/Landing";
import Show from "../Components/Show/Show";

const Home = () => {
  return (
    <div className="home">
      <Landing />
      <Show
        name={
          <>
            <GiFire className="text-[var(--yellowColor)]" />
            أفلام رائجة
          </>
        }
        URL="https://api.themoviedb.org/3/trending/movie/day?language=ar"
      />
      <Show
        name={
          <>
            <GiFire className="text-[var(--yellowColor)]" />
            مسلسلات رائجة
          </>
        }
        URL="https://api.themoviedb.org/3/trending/tv/day?language=ar"
      />
      <Show
        name={
          <>
            <GiFire className="text-[var(--yellowColor)]" />
            أفلام تعرض حاليا
          </>
        }
        URL="https://api.themoviedb.org/3/movie/now_playing?language=ar&page=1"
      />
      <Show
        name={
          <>
            <GiFire className="text-[var(--yellowColor)]" />
            مسلسلات عربية
          </>
        }
        URL="https://api.themoviedb.org/3/discover/tv?with_origin_country=EG&language=ar"
      />
      <Show
        name={
          <>
            <GiFire className="text-[var(--yellowColor)]" />
            أفلام عربية
          </>
        }
        URL="https://api.themoviedb.org/3/discover/movie?with_origin_country=EG&language=ar&page=1&primary_release_year=2025"
      />
      <Show
        name={
          <>
            <GiFire className="text-[var(--yellowColor)]" />
            أفلام قادمة مستقبلا
          </>
        }
        URL="https://api.themoviedb.org/3/movie/upcoming?language=ar&page=2"
      />
      <Show
        name={
          <>
            <GiFire className="text-[var(--yellowColor)]" />
            أفلام أنمي
          </>
        }
        URL="https://api.themoviedb.org/3/discover/movie?language=ar&page=1&with_genres=16&with_keywords=210024|287501"
      />
      <Show
        name={
          <>
            <GiFire className="text-[var(--yellowColor)]" />
            مسلسلات انمي
          </>
        }
        URL="https://api.themoviedb.org/3/discover/tv?language=ar&page=1&with_genres=16&with_keywords=210024|287501"
      />
      <Show
        name={
          <>
            <GiFire className="text-[var(--yellowColor)]" />
            أفلام كوري
          </>
        }
        URL="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar&page=1&sort_by=popularity.desc&with_original_language=ko&primary_release_year=2025"
      />
      <Show
        name={
          <>
            <GiFire className="text-[var(--yellowColor)]" />
            مسلسلات كوري
          </>
        }
        URL="https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=ar&page=1&sort_by=popularity.desc&with_original_language=ko&primary_release_year=2025"
      />
    </div>
  );
};

export default Home;
