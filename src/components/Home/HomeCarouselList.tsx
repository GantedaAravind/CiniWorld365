// import { useState } from "react";
// import Movies from "../../pages/Movies";
import { CarouselMovieType } from "../../utils/constants";
import CarouselMiniCardSkeleton from "../Skeleton/CarouselMiniCardSkeleton";
// import { imagepath } from "../../utils/constants";
// import { FaRegThumbsUp } from "react-icons/fa";
// import { Link } from "react-router-dom";
import CarouselMiniCard from "./CarouselMiniCard";

interface HomeCarouselListProps {
  next: number[];
  carouselMovies: CarouselMovieType[];
}

const HomeCarouselList = ({ next, carouselMovies }: HomeCarouselListProps) => {
  // const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="">
      <h1 className="text-cyan-500 font-bold text-xl">UP Next</h1>
      <div className="row rounded-md">
        {carouselMovies.length > 0
          ? next.map((item, idx) => {
              return (
                <CarouselMiniCard
                  carouselMovies={carouselMovies}
                  item={item}
                  idx={idx}
                />
              );
            })
          : [...Array(3)].map((_,idx) => <CarouselMiniCardSkeleton key = {idx} />)}
      </div>
    </div>
  );
};

export default HomeCarouselList;
