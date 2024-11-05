import { useEffect, useState } from "react";
import HomeSlider from "../../components/Home/HomeSlider";
import { MovieCardType } from "../../utils/constants";
import MovieList from "../../components/Home/MovieList";
import { toast } from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import axiosInstance from "../../config/axiosInstance";
import axios from "axios";
// import Scroll from "../../utils/Scroll";

function Home() {
  const [movies, setMovies] = useState<MovieCardType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMovies = async (page: number) => {
    setLoading(true);
    try {
      const responce = await axiosInstance.get(
        `/top_rated?language=en-US&page=${page}`
      );
      const data = responce.data;
      setMovies((prev) => [...prev, ...data.results]);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error:", err.message);
        toast.error("Failed to fetch data. Please try again later.");
      } else {
        // Handle any non-Axios errors
        console.error("An unexpected error occurred:", err);
        toast.error("An unexpected error occurred.");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const handlePageUpdate = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="p-1 md:p-2 mx-auto   md:w-[95%]  xl:w-[90%]">
      <HomeSlider />
      <MovieList movies={movies} title="Top Rated Movies" />
      <div>
        <button
          onClick={() => {
            handlePageUpdate();
          }}
          disabled={loading}
          className="md:text-xl flex mx-auto sm:text-lg text-md font-medium border-2  disabled:cursor-not-allowed disabled:opacity-50 w-fit md:px-6 sm:px-4 px-2 md:py-2 py-1 rounded-lg  bg-cyan-400  hover:cursor-pointer hover:bg-white hover:text-blue-400 border-cyan-400"
        >
          {!loading ? (
            <span>Load More</span>
          ) : (
            <div className="animate-spin px-10 text-2xl">
              <LuLoader2 />{" "}
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Home;
