import { useRouter } from "next/router";
import { MovieDetail } from "@/components/MovieDetail";
import movies from "@/mock/movies.json";

export default function MoviePage() {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id !== "string") return <div>Loading...</div>;

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <div>영화 정보를 찾을 수 없습니다.</div>;

  return <MovieDetail {...movie} />;
}
