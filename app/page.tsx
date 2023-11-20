import DataLoadingError from "@/components/DataLoadingError";
import DataLoading from "@/components/DataLoding";
import Results from "@/components/Results";
import {
  getTopRatedMovies,
  getTradingMovies,
  getUpcomingMovies,
} from "@/lib/getData";

type ISearchParams =
  | { g: "fetchUpcoming" }
  | { g: "fetchTrending" }
  | { g: "fetchTopRated" };

export const generateStaticParams = () => {
  return [
    { g: "fetchUpcoming" },
    { g: "fetchTrending" },
    { g: "fetchTopRated" },
  ];
};

export default async function App({
  searchParams,
}: {
  searchParams: ISearchParams;
}) {
  const genre = searchParams.g || "fetchUpcoming";

  let data: IApiResponseData | null | undefined = null;

  switch (genre) {
    case "fetchUpcoming":
      data = null;
      data = await getUpcomingMovies();
      break;
    case "fetchTrending":
      data = null;
      data = await getTradingMovies();
      break;
    case "fetchTopRated":
      data = null;
      data = await getTopRatedMovies();
      break;
    default:
      throw Error("Unknown genre type.");
  }

  if (data === undefined || data?.results?.length === 0)
    return <DataLoadingError />;

  if (data === null) return <DataLoading />;

  return (
    <div className="max-w-6xl mx-auto py-4 px-6 space-y-8 mt-8">
      <Results data={data.results} />
    </div>
  );
}
