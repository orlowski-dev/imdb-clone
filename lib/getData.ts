const RAPID_API_KEY = process.env.RAPID_API_KEY;
const OMDB_API_KEY = process.env.OMDB_API_KEY;

if (!RAPID_API_KEY) throw Error("Couldn't find RAPID_API_KEY");
if (!OMDB_API_KEY) throw Error("Couldn't find OMDB_API_KEY");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
  next: { revalidate: 3600 },
};

export async function getUpcomingMovies(): Promise<
  IApiResponseData | undefined
> {
  const url =
    "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?titleType=movie&limit=20";

  const res = await fetch(url, options);
  return !res.ok ? undefined : res.json();
}

export async function getTradingMovies(): Promise<
  IApiResponseData | undefined
> {
  const url =
    "https://moviesdatabase.p.rapidapi.com/titles/random?limit=20&list=most_pop_series";
  // most_pop_movies doesn't work

  const res = await fetch(url, options);
  return !res.ok ? undefined : res.json();
}

export async function getTopRatedMovies(): Promise<
  IApiResponseData | undefined | null
> {
  const url =
    "https://moviesdatabase.p.rapidapi.com/titles/random?limit=20&list=top_rated_english_250";

  const res = await fetch(url, options);
  return !res.ok ? undefined : res.json();
}

export async function getMovieById(
  id: string
): Promise<IOMDBResponseData | null | undefined> {
  const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  return !res.ok ? undefined : res.json();
}

export async function getMovieByTitle(
  title: string
): Promise<IApiResponseData | undefined | null> {
  const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}?exact=false&titleType=movie&limit=20`;

  const res = await fetch(url, options);
  return !res.ok ? undefined : res.json();
}
