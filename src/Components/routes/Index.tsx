import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "../../Pages/Home";
import Movie from "../../Pages/Movie";
import Soon from "../../Pages/Soon";
import Tv from "../../Pages/Tv";
import Actor from "../../Pages/Actor";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/soon" element={<Soon />} />
      <Route path="/tv" element={<Tv />} />
      <Route path="/actor" element={<Actor />} />
    </Route>
  )
);
