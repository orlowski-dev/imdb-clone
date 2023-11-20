import DataLoadingError from "@/components/DataLoadingError";
import DataNotFound from "@/components/DataNotFound";
import Results from "@/components/Results";
import { getMovieByTitle } from "@/lib/getData";

export default async function Search({
  params,
}: {
  params: { searchTerm: string };
}) {
  const searchTitle = params.searchTerm;
  if (!searchTitle) return <DataLoadingError />;

  const data = await getMovieByTitle(searchTitle);

  if (data === undefined || data === null) return <DataLoadingError />;
  if (data?.results?.length === 0) return <DataNotFound />;

  return (
    <div className="max-w-6xl mx-auto py-4 px-6 space-y-8 mt-8">
      <Results data={data.results} />
    </div>
  );
}
