import DataLoadingError from "@/components/DataLoadingError";
import DataLoading from "@/components/DataLoding";
import Results from "@/components/Results";
import { getUpcomingMovies } from "@/lib/getData";

export default async function App({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const genre = searchParams.g || "fetchUpcoming";

  let data: IApiResponseData | null | undefined = null;

  switch (genre) {
    case "fetchUpcoming":
      data = await getUpcomingMovies();
      break;
    case "fetchTrending":
      break;
    case "fetchTopRated":
      break;
    default:
      throw Error("Unknown genre type.");
  }

  if (data === undefined) return <DataLoadingError />;

  if (data === null) return <DataLoading />;

  return (
    <div className="max-w-6xl mx-auto py-4 px-6 space-y-8 mt-8">
      <h1 className="text-4xl font-bold">Upcoming movies</h1>
      <Results data={data.results} />
    </div>
  );
}
