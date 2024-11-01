import { MovieCardType } from "../../utils/constants";
import MovieCardSkeleton from "../Skeleton/MovieCardSkeleton";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: MovieCardType[];
  title?: string;
}

const MovieList = ({ movies, title }: MovieListProps) => {
  return (
    <div className="md:mt-14 sm:mt-8 mt-4">
      {title && (
        <h1 className="text-cyan-500 md:text-3xl sm:text-2xl text-xl font-bold">
          {title}
        </h1>
      )}
      <div className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
        {movies.length > 0
          ? movies.map((movie, idx) => {
              return <MovieCard movie={movie} key={idx} />;
            })
          : [...Array(12)].map((_,idx) => <MovieCardSkeleton key = {idx}/>)}
      </div>
    </div>
  );
};
export default MovieList;
