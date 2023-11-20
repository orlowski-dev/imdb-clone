import Image from "next/image";

export default function MovieCard({ movie }: { movie: IMovieData }) {
  const imageUrl = movie.primaryImage?.url || undefined;
  return (
    <article className="">
      {imageUrl ? (
        // <Image
        //   src={imageUrl}
        //   width={movie.primaryImage.width}
        //   height={movie.primaryImage.height}
        //   alt={movie.titleText.text + " image"}
        //   priority={false}
        // />
        <div className="aspect-2/3 bg-slate-700 overflow-hidden rounded-xl">
          <Image
            src={imageUrl}
            width={movie.primaryImage.width}
            height={movie.primaryImage.height}
            alt={movie.titleText.text + " image"}
            priority={false}
            className="min-h-full min-w-full"
          />
        </div>
      ) : (
        <div className="aspect-2/3 bg-slate-700 rounded-xl"></div>
      )}

      <h2>{movie.titleText.text}</h2>
      <p>
        Release: {movie.releaseDate.day}/{movie.releaseDate.month}/
        {movie.releaseDate.year}
      </p>
    </article>
  );
}
