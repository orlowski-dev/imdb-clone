import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: IMovieData }) {
  const imageUrl = movie.primaryImage?.url || undefined;
  return (
    <Link href={"/movie/" + movie.id}>
      <article>
        {imageUrl ? (
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
          <div className="aspect-2/3 bg-slate-700 rounded-xl animate-pulse"></div>
        )}

        <div className="space-y-2 mt-4">
          <h2 className="font-medium">{movie.titleText.text}</h2>
          <p>
            Release: {movie?.releaseDate?.day}/{movie?.releaseDate?.month}/
            {movie?.releaseDate?.year}
          </p>
        </div>
      </article>
    </Link>
  );
}
