export const imagepath = "https://image.tmdb.org/t/p/original";

export interface CarouselMovieType {
  // adult: boolean;
  backdrop_path: string;
  // genre_ids : number[];
  id: number;
  // original_language : string;
  // original_title:string;
  overview: string;
  // popularity : number;
  poster_path: string;
  // release_date:string;
  title: string;
  // video:boolean;
  // vote_average:string;
  vote_count: number;
}

export interface MovieCardType {
  // backdrop_path: string;
  // genre_ids: number[];
  id: number;
  original_language: string;
  // original_title: string;
  // overview: string;
  // popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  // video: boolean;
  vote_average: number;
  // vote_count: number ;
}

export interface CategoryType {
  name: string;
  path: string;
}

export const category: CategoryType[] = [
  { name: "Now Playing", path: "now_playing" },
  { name: "Popular", path: "popular" },
  { name: "Top Rated", path: "top_rated" },
  { name: "Upcoming", path: "upcoming" },
];

export interface MovieDetailType {
  // adult: boolean;
  backdrop_path: string;
  // // belongs_to_collection
  // // :
  // // {id: 230, name: 'The Godfather Collection', poster_path: '/zqV8MGXfpLZiFVObLxpAI7wWonJ.jpg', backdrop_path: '/mDMCET9Ens5ANvZAWRpluBsMAtS.jpg'}
  // budget: number;
  // // genres
  // // :
  // // (2) [{…}, {…}]
  // homepage: string;
  id: number;
  // imdb_id: string;
  // origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  // popularity: number;
  poster_path: string;
  // // production_companies
  // // :
  // // (3) [{…}, {…}, {…}]
  // // production_countries
  // // :
  // // [{…}]
  release_date: string;
  // revenue: number;
  // runtime: number;
  // // spoken_languages
  // // :
  // // (4) [{…}, {…}, {…}, {…}]
  // status: string;
  tagline: string;
  // title: string;
  // video: boolean;
  vote_average: number;
  // vote_count: number;

  genres : {name:string}[];
}
