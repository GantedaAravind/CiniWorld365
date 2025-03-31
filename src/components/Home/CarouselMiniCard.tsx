import { useState } from "react";
import { CarouselMovieType } from "../../utils/constants";
import { imagepath } from "../../utils/constants";
import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
interface CarouselMiniCardProps {
  carouselMovies: CarouselMovieType[];
  item: number;
  idx: number;
}

const CarouselMiniCard = ({
  carouselMovies,
  item,
  idx,
}: CarouselMiniCardProps) => {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <Link to={`/details/${carouselMovies[item]?.id}`} className="col-xl-12 col">
      <div
        className="flex gap-2"
        key={idx}
        onMouseEnter={() => {
          setHover(idx);
        }}
        onMouseLeave={() => {
          setHover(null);
        }}
      >
        <img
          loading="lazy"
          src={imagepath + carouselMovies[item]?.poster_path}
          className="w-[80px] aspect-[4/6] m-2 rounded-md"
          alt="image does not support"
        />
        <div className="flex flex-col justify-between py-2">
          <div className="leading-5">
            <h1 className={`${hover === idx ? "underline" : ""}`}>
              {carouselMovies[item]?.title}
            </h1>
            <h1 className="text-md text-zinc-300 line-clamp-2">
              {carouselMovies[item]?.overview}
            </h1>
          </div>
          <div className="flex items-center gap-1">
            <FaRegThumbsUp />
            <h2>{carouselMovies[item]?.vote_count}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarouselMiniCard;
