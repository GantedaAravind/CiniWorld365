import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imagepath, MovieDetailType } from "../../utils/constants";
import Trailers from "../../components/MovieDetails/Trailers";
import SimalerMovies from "../../components/MovieDetails/SimalerMovies";
import DetailsSkeleton from "../../components/Skeleton/DetailsSkeleton";
import { toast } from "react-hot-toast";
// import placeholder from"../../assets/placeholder.svg";

import axiosInstance from "../../config/axiosInstance";

function Details() {
  const params = useParams();
  const [details, setDetails] = useState<MovieDetailType | null>(null);

  const fetchDetails = async () => {
    try {
      const res = await axiosInstance.get(`/${params.id}?language=en-US`);
      const data = res.data;
      //   console.log(data);
      setDetails(data);
    } catch (err) {
      toast.error("fetch error in movie details..");
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [params]);

  return (
    <div>
      {details && params?.id ? (
        <div className="relative h-fit w-full">
          <div className="relative ">
            <img
              className="opacity-40 w-full aspect-[7/4] object-center min-h-[500px]"
              alt="background"
              src={imagepath + details?.backdrop_path}
            />
            <div className="absolute _carouselGradient w-full bottom-0 h-full"></div>
          </div>
          <div className="absolute top-0 pb-[100px] w-full">
            <div className="lg:mt-[500px] md:mt-[400px] mt-[200px] mx-auto w-[90%]">
              <div className="md:flex gap-8">
                <img
                  src={imagepath + details?.poster_path}
                  alt="poster"
                  className="lg:w-[350px] md:w-[280px] sm:w-[250px] w-[200px] h-fit aspect-[3/4] md:rounded-lg rounded-md "
                />
                <div className="">
                  <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
                    {details?.original_title}
                    <span className="md:mx-3 mx-1 lg:text-4xl md:text-3xl sm:text-2xl text-xl">
                      ({details?.release_date.substring(0, 4)})
                    </span>
                  </h1>
                  <div className="lg:text-xl md:text-lg sm:text-md text-sm  text-slate-300 mt-2">
                    <h2>{details?.tagline}</h2>
                    <h2 className="sm:mt-3 mt-2">{details?.overview}</h2>
                    <div className="flex flex-col md:gap-3 sm:gap-2 gap-1 mt-4 text-zinc-300">
                      <h2 className="">
                        Genres:{" "}
                        {details?.genres?.map((genre) => genre.name).join(", ")}
                      </h2>
                      <h2>
                        Rating :{" "}
                        {details?.vote_average.toString().substring(0, 3)}
                      </h2>
                      <h2>Original Langauge : {details?.original_language}</h2>
                      <h2>Relese Date : {details?.release_date}</h2>
                    </div>
                  </div>
                </div>
              </div>

              <Trailers movieId={params?.id} />
              <SimalerMovies movieId={params?.id} />
            </div>
          </div>
        </div>
      ) : (
        <DetailsSkeleton />
      )}
    </div>
  );
}

export default Details;
