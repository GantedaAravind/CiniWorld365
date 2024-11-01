import { useEffect, useState } from "react";
import HomeSlider from "../../components/Home/HomeSlider";
import { MovieCardType } from "../../utils/constants";
import MovieList from "../../components/Home/MovieList";
import { toast } from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import axios from "axios";
// import Scroll from "../../utils/Scroll";

function Home() {
  const [movies, setMovies] = useState<MovieCardType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMovies = async (page: number) => {
    setLoading(true);
    try {
      const options = {
        // method: "GET",
        headers: {
          // accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmQyMjg5YjY2ZDg0ZWQzNTkwZGZmZWI4MDNiMTk3OSIsIm5iZiI6MTcyNTc5ODI2Ny41NTI0LCJzdWIiOiI2NmRkOTViYzAxNjc5ZTQyYzA5YTlkM2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Osc2pyAZCKX0bOx2uCi8x4weUMlv-_ZxffSeUDbRGg0",
        },
      };

      const responce = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
        options
      );
      const data = responce.data;
      // console.log(data);
      setMovies((prev) => [...prev, ...data.results]);
    } catch (err) {
      console.log(err);
      toast.error("Error ocuured in Fetching Movies...😣");
    }
    setLoading(false);
  };

  // useEffect(()=>{
  //   console.log(movies);
  // },[movies]);

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
