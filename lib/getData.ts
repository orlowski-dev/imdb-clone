const API_KEY = process.env.API_KEY;

if (!API_KEY) throw Error("Couldn't find API_KEY");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
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
