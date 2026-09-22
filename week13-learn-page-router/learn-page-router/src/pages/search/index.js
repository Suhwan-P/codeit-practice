import { useRouter } from "next/router";
import { SearchLayout } from "@/components/layouts/SearchLayout";
import { MovieItem } from "@/components/MovieItem";
import movies from "@/mock/movies.json";

export default function SearchPage() {
  const router = useRouter();
  const query = typeof router.query.q === "string" ? router.query.q : "";
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      {filteredMovies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

SearchPage.getLayout = (page) => {
  return <SearchLayout>{page}</SearchLayout>;
};
