import { useEffect, useState } from "react";
// import { FaRegThumbsUp } from "react-icons/fa";
import { CarouselMovieType } from "../../utils/constants";
import HomeCarousel from "./HomeCarousel";
import HomeCarouselList from "./HomeCarouselList";
import HomeCarouselSkeleton from "../Skeleton/HomeCarouselSkeleton";
import { toast } from "react-hot-toast";
import axios from "axios";
const HomeSlider = () => {
  const [carouselMovies, setCarouselMovies] = useState<CarouselMovieType[]>([]);
  const [selected, setSelected] = useState(0);
  const [next, setNext] = useState<number[]>([1, 2, 3]);

  const fetchUpcoming = async () => {
    try {
      const options = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmQyMjg5YjY2ZDg0ZWQzNTkwZGZmZWI4MDNiMTk3OSIsIm5iZiI6MTcyNTc5ODI2Ny41NTI0LCJzdWIiOiI2NmRkOTViYzAxNjc5ZTQyYzA5YTlkM2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Osc2pyAZCKX0bOx2uCi8x4weUMlv-_ZxffSeUDbRGg0",
        },
      };

      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        options
      );
      setCarouselMovies(response.data.results);
    } catch (err) {
      toast.error("Fetch upcoming movies failed...");
    }
  };

  useEffect(() => {
    if (carouselMovies.length) {
      const ind1 = (selected + 1) % carouselMovies.length;
      setNext([ind1, ind1 + 1, ind1 + 2]);
    }
  }, [carouselMovies, selected]);

  useEffect(() => {
    const myCarousel = document.getElementById("carouselExample");

    const handleSlide = (event: Event) => {
      const customEvent = event as any;
      setSelected(customEvent.to);
    };

    if (myCarousel) {
      myCarousel.addEventListener("slid.bs.carousel", handleSlide);

      return () => {
        myCarousel.removeEventListener("slid.bs.carousel", handleSlide);
      };
    }
  }, []);

  useEffect(() => {
    fetchUpcoming();
  }, []);

  return (
    <div className="row">
      <div className="relative col-12 col-xl-8">
        {carouselMovies.length > 0 ? (
          <div id="carouselExample" className="carousel slide h-full">
            <HomeCarousel carouselMovies={carouselMovies} />
            <button
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
          </div>
        ) : (
          <HomeCarouselSkeleton />
        )}
      </div>
      <div className="col-12 col-xl-4 d-none d-lg-block">
        <HomeCarouselList next={next} carouselMovies={carouselMovies} />
      </div>
    </div>
  );
};

export default HomeSlider;
