export interface ILanding {
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
  name: string;
  poster_path: string;
  genre_ids: number[];
}

export interface IGenres {
  id: number;
  name: string;
}
