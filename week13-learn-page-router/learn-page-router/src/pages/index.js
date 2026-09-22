import * as styles from "@/styles/home.css.js";
import { SearchLayout } from "@/components/layouts/SearchLayout";
import { MovieItem } from "@/components/MovieItem";
import movies from "@/mock/movies.json";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <section>
        <h2>지금 상영 중인 영화</h2>
        <div className={styles.list}>
          {movies.map((movie) => (
            <MovieItem key={`now-playing-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>

      <section>
        <h2>등록된 모든 영화</h2>
        <div className={styles.list}>
          {movies.map((movie) => (
            <MovieItem key={`all-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

HomePage.getLayout = (page) => <SearchLayout>{page}</SearchLayout>;
