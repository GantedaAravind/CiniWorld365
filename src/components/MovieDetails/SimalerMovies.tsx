import { useEffect, useState } from "react";
import { MovieCardType } from "../../utils/constants";
import MovieList from "../Home/MovieList";

import { toast } from 'react-hot-toast';
import { LuLoader2 } from "react-icons/lu";
import axios from "axios";

const SimalerMovies = ({ movieId }: { movieId: string }) => {
  const [movies, setMovies] = useState<MovieCardType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading,setLoading] = useState<boolean>(false);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    fetchSimalarMovies(page + 1);
  };

  const fetchSimalarMovies = async (page: number) => {
    setLoading(true);
    try {
      const options = {
        // method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmQyMjg5YjY2ZDg0ZWQzNTkwZGZmZWI4MDNiMTk3OSIsIm5iZiI6MTcyNTg5OTk0NC4yMTEzNDMsInN1YiI6IjY2ZGQ5NWJjMDE2NzllNDJjMDlhOWQzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q9d5TeT0LSD-0C00M2jEfZY4visi4_sC7DIGd3PPsWY",
        },
      };

      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=${page}`,
        options
      );
      const data = response.data;
      // console.log(data.results);
      if (page == 1) setMovies(data.results);
      else setMovies((prev) => [...prev, ...data.results]);
    } catch (err) {
      toast.error("fetch error in Simaler Movies...");
    }
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling animation
    });
    fetchSimalarMovies(1);
  }, [movieId]);

  return (
    <div>
      {/* <h1>Simaler Movies</h1> */}
      <MovieList movies={movies} title={"Simalar Movies"} />
      <div>
      <button
          onClick={() => {
            handleLoadMore();
          }}
          disabled={loading}
          className="md:text-xl flex mx-auto sm:text-lg text-md font-medium border-2  disabled:cursor-not-allowed disabled:opacity-50 w-fit md:px-6 sm:px-4 px-2 md:py-2 py-1 rounded-lg  bg-cyan-400  hover:cursor-pointer hover:bg-white hover:text-blue-400 border-cyan-400"
        >
          {
            !loading ?  <span>Load More</span> : <div className="animate-spin px-10 text-2xl"><LuLoader2 /> </div>
          }
        </button>
      </div>
    </div>
  );
};
export default SimalerMovies;
