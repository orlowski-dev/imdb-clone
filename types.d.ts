interface IMovieData {
  _id: string;
  id: string;
  primaryImage: {
    id: string;
    width: number;
    height: number;
    url: string;
    caption: {
      plainText: string;
      __typename: string;
    };
    __typename: string;
  };
  titleType: {
    displayableProperty: {
      value: {
        plainText: string;
        __typename: string;
      };
      __typename: string;
    };
    text: string;
    id: string;
    isSeries: boolean;
    isEpisode: boolean;
    categories: [
      {
        value: string;
        __typename: string;
      }
    ];
    canHaveEpisodes: boolean;
    __typename: string;
  };
  titleText: {
    text: string;
    __typename: string;
  };
  originalTitleText: {
    text: string;
    __typename: string;
  };
  releaseYear: {
    year: number | null;
    endYear: number | null;
    __typename: string;
  };
  releaseDate: {
    day: number;
    month: number;
    year: number;
    __typename: string;
  };
}

interface IApiResponseData {
  page: number;
  next: string;
  entries: number;
  results: IMovieData[];
}

interface IOMDBResponseData {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: number[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
