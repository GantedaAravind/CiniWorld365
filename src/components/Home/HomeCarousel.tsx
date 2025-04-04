import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { imagepath, CarouselMovieType } from "../../utils/constants";

// import placeholder from "../../assets/placeholder600_400.svg";

interface HomeCarouselProps {
  carouselMovies: CarouselMovieType[];
}

const HomeCarousel = ({ carouselMovies }: HomeCarouselProps) => {
  return (
    <div className="carousel-inner h-full">
      {carouselMovies.map((movie, idx) => {
        return (
          <Link key={idx} to={"/details/" + String(movie.id)}>
            <div
              className={
                !idx ? "carousel-item active h-full" : "carousel-item h-full"
              }
            >
              <div className="relative h-full">
                <img
                  src={imagepath + movie.backdrop_path}
                  className="w-full h-full object-cover min-h-[300px] aspect-[7/4]"
                  alt="background image"
                />
                <div
                  className={`h-full w-full top-0 left-0 bg-black absolute hover:opacity-[0.2] opacity-[0]`}
                ></div>
                <div className="absolute bottom-0 h-24 bg-blue-300 w-full _carouselGradient "></div>
              </div>
              <div className="absolute bottom-0 items-end md:flex px-4 gap-4">
                <img
                  src={imagepath + movie.poster_path}
                  className="md:w-[160px] w-[120px] aspect-[4/5] "
                  alt="Poster image"
                />
                <div className="flex flex-col gap-1">
                  <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white">
                    {movie.title}
                  </h1>
                  <h2 className="w-[95%] lg:text-xl md:text-lg  text-md md:line-clamp-3 line-clamp-2 text-zinc-400">
                    {movie.overview}
                  </h2>
                  <div className="flex items-center gap-1 text-zinc-400 lg:text-lg md:text-md text-sm">
                    <FaRegThumbsUp />
                    <h1>{movie.vote_count}</h1>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
      {/* </div> */}
      {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </div>
  );
};

export default HomeCarousel;
