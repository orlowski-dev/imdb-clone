import DataLoadingError from "@/components/DataLoadingError";
import { getMovieById } from "@/lib/getData";
import Image from "next/image";

export default async function Movie({ params }: { params: { id: string } }) {
  const movieId = params.id;

  if (!movieId) return <DataLoadingError />;

  const movieData = await getMovieById(movieId);

  if (!movieData) return <DataLoadingError />;

  return (
    <main>
      <section className="max-w-6xl mx-auto py-4 px-6 space-y-8 mt-8 grid md:grid-cols-movieDetails gap-8">
        {movieData.Poster ? (
          <div className="aspect-3/2 md:aspect-2/3 bg-slate-700 overflow-hidden rounded-xl">
            <Image
              src={movieData.Poster}
              width={400}
              height={600}
              alt={movieData.Title + " image"}
              priority={false}
              className="min-h-full min-w-full"
            />
          </div>
        ) : (
          <div className="aspect-2/3 bg-slate-700 rounded-xl animate-pulse"></div>
        )}
        <div className="space-y-6">
          <h2 className="text-xl font-bold">{movieData.Title}</h2>
          <p>{movieData?.Plot}</p>
          <p>
            <b>Genre:</b> {movieData?.Genre}
          </p>
          <p>
            <b>Runtime:</b> {movieData?.Runtime}
          </p>
          <p>
            <b>Released:</b> {movieData?.Released}
          </p>
          <p>
            <b>Metascore:</b> {movieData?.Metascore}
          </p>
          <p>
            <b>Country:</b> {movieData?.Country}
          </p>
          <p>
            <b>Language:</b> {movieData?.Language}
          </p>
          <p>
            <b>Director:</b> {movieData?.Director}
          </p>
          <p>
            <b>Writer:</b> {movieData?.Writer}
          </p>
          <p>
            <b>Actors:</b> {movieData?.Actors}
          </p>
          <p>
            <b>Awards:</b> {movieData?.Awards}
          </p>
        </div>
      </section>
    </main>
  );
}
