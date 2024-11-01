import { useState } from "react";
import { imagepath, MovieCardType } from "../../utils/constants";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../assets/placeholder.svg";
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
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        ease: "easeIn",
      }}
      exit={{
        opacity: 0,
        x: -50,
      }}
      viewport={{ once: false, amount: 0.2 }}
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
              movie.id === hover ? "scale-[102%] " : ""
            } duration-200`}
          >
            <div className="relative overflow-hidden">
              <LazyLoadImage
                src={imagepath + movie.poster_path}
                alt=""
                effect="blur"
                placeholderSrc={placeholder}
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