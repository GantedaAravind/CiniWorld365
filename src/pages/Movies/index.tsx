import { useState, useEffect } from "react";
import { category, MovieCardType } from "../../utils/constants";
import MovieList from "../../components/Home/MovieList";
// import LoadMoreButton from "../../components/Button/LoadMoreButton";
import { toast } from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import axiosInstance from "../../config/axiosInstance";

// import { baseApi } from '../../api/axiosInstance'
// import MovieList from '../../components/Home/MovieList'
// import LoadMoreBtn from '../../components/Button/LoadMoreBtn';

interface PayeType {
  [key: string]: number;
}

function Movies() {
  const [filter, setFilter] = useState<string>(category[0].name);
  const [nowPlaying, setNowPlaying] = useState<MovieCardType[]>([]);
  const [popular, setPopular] = useState<MovieCardType[]>([]);
  const [topRated, setTopRated] = useState<MovieCardType[]>([]);
  const [upcoming, setUpcoming] = useState<MovieCardType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [page, setPage] = useState<PayeType>({
    now_playing: 1,
    popular: 1,
    top_rated: 1,
    upcoming: 1,
  });
  const handleLoadMore = () => {
    const currentCategory = category.filter((item) => item.name === filter);
    if (currentCategory) {
      console.log(currentCategory[0].path);
      setPage((prev) => {
        return {
          ...prev,
          [currentCategory[0].path]: prev[currentCategory[0].path] + 1,
        };
      });
      fetchMovies(currentCategory[0].path, page[currentCategory[0].path] + 1);
    }
  };

  const toggleSelection = (item: string) => {
    setFilter(item);
  };

  const fetchMovies = async (path: string, page: number) => {
    setLoading(true);
    try {

      const response = await axiosInstance.get(
        `/${path}?language=en-US&page=${page}`
      );
      const data = response.data;
      switch (path) {
        case "now_playing":
          setNowPlaying((prev) => [...prev, ...data.results]);
          break;
        case "popular":
          setPopular((prev) => [...prev, ...data.results]);
          break;
        case "top_rated":
          setTopRated((prev) => [...prev, ...data.results]);
          break;
        case "upcoming":
          setUpcoming((prev) => [...prev, ...data.results]);
          break;
        default:
          break;
      }
    } catch (error) {
      toast.error("Fetch error in Movies Page");
    }
    setLoading(false);
  };

  useEffect(() => {
    const current = category.filter((item) => item.name == filter);
    // console.log(current);
    fetchMovies(current[0].path, 1);
  }, [filter]);

  return (
    <div className="w-[90%] m-auto mt-4">
      <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-yellow-500">
        Explore Movies
      </h1>
      <div className="flex mt-2 flex-wrap">
        {category.map((item, ind) => (
          <div key={ind} className="">
            <button
              onClick={() => toggleSelection(item.name)}
              className="md:text-base sm:text-sm text-xs font-semibold lg:w-44 md:w-40 sm:w-36 p-2 h-10 hover:bg-[#121212]"
            >
              {item.name}
            </button>
            <div
              className={`h-0.5 bg-blue-400 mx-auto ${
                filter == item.name ? "w-full" : "w-0"
              } duration-200`}
            ></div>
          </div>
        ))}
      </div>

      {filter === "Now Playing" && <MovieList movies={nowPlaying} />}
      {filter === "Popular" && <MovieList movies={popular} />}
      {filter === "Top Rated" && <MovieList movies={topRated} />}
      {filter === "Upcoming" && <MovieList movies={upcoming} />}

      <div>
        <button
          onClick={() => {
            handleLoadMore();
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

export default Movies;
