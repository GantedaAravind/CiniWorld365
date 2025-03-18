import { ChangeEvent, useEffect, useState, KeyboardEvent , useRef} from "react";
import { Link } from "react-router-dom";
import { CarouselMovieType } from "../../utils/constants";
import CarouselMiniCard from "../Home/CarouselMiniCard";
import { IoClose } from "react-icons/io5";
import axios from "axios";
const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  const [searchList, setSearchList] = useState<CarouselMovieType[]>([]);
  const [showSearch, setShowSearch] = useState<boolean>(true);
  const searchCache = useRef<{ [key: string]: CarouselMovieType[] }>({});


  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };


  const fetchSearch = async () => {
    if (searchCache.current[search]) { 
      setSearchList(searchCache.current[search]); 
      return; 
    }
    
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
        {
          headers: {
            Authorization: import.meta.env.VITE_AUTHORIZATION,
          },
        }
      );

      const data = response.data;
      setSearchList(data.results);
      searchCache.current[search] = data.results;

    } catch (err) {
      console.log("fetch error in search...", err);
    }
  };


  useEffect(() => {
    if (search.length > 0) setShowSearch(true);
    else setShowSearch(false);
    const t = setTimeout(() => {
      fetchSearch();
    }, 300);
    return () => {
      clearTimeout(t);
    };
  }, [search]);


  const toggleShow = (bool: boolean) => {
    setShowSearch(bool);
  };
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      (event.target as HTMLInputElement).blur();
    }
  };
  //bg-[#121212]
  return (
    <nav className="py-2">
      <div className="flex justify-between items-center  w-[95%] lg:w-[80%] md:w-[90%] mx-auto">
        <div className="flex flex-row items-center lg:space-x-16 sm:space-x-8 scale-x-1">
          <Link to="/">
            <div className="flex flex-col text-cyan-500 sm:scale-100 scale-[70%]">
              <h1 className="text-2xl  font-semibold">CineWorld</h1>
            </div>
          </Link>

          <Link to="/movies">
            <button className="sm:text-[18px] text-md text-cyan-500 hover:underline">
              EXPLORE
            </button>
          </Link>
        </div>
        <div className="relative">
          <input
            placeholder="Search"
            onChange={handleSearchChange}
            onClick={() => {
              toggleShow(true);
            }}
            className="md:w-[500px] sm:w-[350px] w-[180px] h-10 bg-black text-[#c2c2c2]
            md:text-lg sm:text-md text-sm  outline-none sm:px-4 px-2 placeholder:text-[#646464] rounded-xl"
            type="text"
          />
          {showSearch && search.length > 0 && (
            <div
              onClick={() => toggleShow(false)}
              className="text-cyan-500 absolute z-30 top-2 sm:text-2xl text-xl right-1"
            >
              <IoClose />
            </div>
          )}
          {showSearch && search.length > 0 && searchList.length > 0 && (
            <div
              className="relative"
              onClick={() => toggleShow(false)}
              onKeyDown={handleKeyPress}
            >
              <div className="sm:absolute fixed sm:max-w-[500px] left-0 w-full  bg-zinc-800 z-50 rounded-xl">
                <div className="py-3 px-4 ">
                  <div className="h-fit max-h-[380px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-2">
                    {searchList.length > 0 &&
                      searchList.map((_, idx) => (
                        <CarouselMiniCard
                          key={idx}
                          carouselMovies={searchList}
                          item={idx}
                          idx={idx}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
