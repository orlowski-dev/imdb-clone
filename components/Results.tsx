import MovieCard from "./MovieCard";

export default function Results({ data }: { data: IMovieData[] }) {
  return (
    <section className="grid grid-cols-results gap-8">
      {data.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
