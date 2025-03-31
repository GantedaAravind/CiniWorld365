import { useEffect, useState } from "react";
import { MovieCardType } from "../../utils/constants";
import MovieList from "../Home/MovieList";

import { toast } from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance";
import LoadMoreButton from "../LoadMoreButton";

const SimalerMovies = ({ movieId }: { movieId: string }) => {
  const [movies, setMovies] = useState<MovieCardType[]>([]);
  const [page, setPage] = useState<number>(1);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    fetchSimalarMovies(page + 1);
  };

  const fetchSimalarMovies = async (page: number) => {
    try {
      const response = await axiosInstance.get(
        `/${movieId}/similar?language=en-US&page=${page}`
      );
      const data = response.data;
      // console.log(data.results);
      if (page == 1) setMovies(data.results);
      else setMovies((prev) => [...prev, ...data.results]);
    } catch (err) {
      toast.error("fetch error in Simaler Movies...");
    }
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

      <LoadMoreButton title="No More Movies" callback={handleLoadMore} />
    </div>
  );
};
export default SimalerMovies;
