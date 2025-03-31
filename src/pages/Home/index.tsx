import { useEffect, useState } from "react";
import HomeSlider from "../../components/Home/HomeSlider";
import { MovieCardType } from "../../utils/constants";
import MovieList from "../../components/Home/MovieList";
import { toast } from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance";
import axios from "axios";
import LoadMoreButton from "../../components/LoadMoreButton";
// import Scroll from "../../utils/Scroll";

function Home() {
  const [movies, setMovies] = useState<MovieCardType[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchMovies = async (page: number) => {
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

      <LoadMoreButton title={"No More Movies"} callback={handlePageUpdate} />
    </div>
  );
}

export default Home;
