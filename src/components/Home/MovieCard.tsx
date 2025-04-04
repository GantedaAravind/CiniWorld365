import { useState } from "react";
import { imagepath, MovieCardType } from "../../utils/constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface MovieCardProps {
  movie: MovieCardType;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: +50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.5,
        type: "spring",
      }}
      exit={{
        opacity: 0,
        y: 50,
      }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <Link to={`/details/${movie.id}`}>
        <div
          className="col"
          onMouseEnter={() => {
            setHover(movie.id);
          }}
          onMouseLeave={() => {
            setHover(null);
          }}
        >
          <div
            className={`my-3 rounded-lg overflow-hidden  border-2 border-zinc-800 ${
              movie.id === hover ? "scale-[102%] border-blue-500" : ""
            } duration-200`}
          >
            <div className="relative overflow-hidden">
              <img
                src={imagepath + movie.poster_path}
                alt=""
                // placeholderSrc={placeholder}
                className="aspect-[3/4]"
              />
              <div className="absolute -bottom-6 w-full h-28 _carouselGradient"></div>
            </div>
            <div className="bg-[#222] p-2">
              <h1
                className={`md:text-[17px] text-sm font-semibold line-clamp-1 ${
                  movie.id === hover ? "underline " : ""
                }`}
              >
                {movie.title}
              </h1>
              <div className="text-zinc-300 md:text-[15px] text-[13px] mt-2">
                <h1 className="">
                  Rating : {String(movie.vote_average).substring(0, 3)}
                </h1>
                <h1>Language : {movie.original_language}</h1>
                <h1>Release : {movie.release_date}</h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MovieCard;
