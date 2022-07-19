import { useParams } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import MovieCard from "./MovieCard";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

  return (
    <div className="pb-10">
      <div className="mt-[70px] container m-auto"></div>
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${tmdbAPI.image(backdrop_path, "original")})`,
          }}
        ></div>
      </div>
      <div className="h-[400px] max-w-[800px] m-auto -mt-[200px] relative z-10 pb-10">
        <img
          // src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          src={tmdbAPI.image(poster_path, "original")}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h1 className="text-center text-4xl font-bold text-white mb-10">{title}</h1>
      {genres.length > 0 && (
        <div className="flex items-center gap-x-5 mb-10 justify-center">
          {genres.map((item) => (
            <span className="py-2 px-4 border-primary text-primary border rounded" key={item.id}>
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">{overview}</p>
      <MovieData type="credits"></MovieData>
      <MovieData type="videos"></MovieData>
      <MovieData type="similar"></MovieData>
    </div>
  );
};

function MovieData({ type = "videos" }) {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, type), fetcher);
  if (!data) return null;
  if (type === "credits") {
    const { cast } = data;
    if (!cast || cast.length <= 0) return null;
    return (
      <div className="py-10">
        <h2 className="text-center text-3xl mb-4">Diễn viên</h2>
        <div className="grid grid-cols-4 gap-5 container m-auto">
          {cast.slice(0, 4).map((item) => (
            <div className="cast-item" key={item.id}>
              <img
                src={tmdbAPI.image(item.profile_path, "original")}
                className="w-full h-[350px] object-cover rounded-lg mb-3"
                alt=""
              />
              <h3 className="text-xl font-medium text-center">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    const { results } = data;
    if (!results || results.length <= 0) return null;
    if (type === "videos") {
      return (
        <div className="py-10">
          <div className="flex flex-col gap-5 container m-auto">
            {results.slice(0, 1).map((item) => (
              <div className="w-full" key={item.id}>
                <h3 className="mb-5 text-3xl font-medium p-3 text-secondary text-center">
                  {item.name}
                </h3>
                <div className="w-full aspect-video ">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${item.key}`}
                    title="Ông Đinh La Thăng nói lời sau cùng: “Làm nhiều sai nhiều, không làm không sai”"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-fill"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (type === "similar") {
      return (
        <div className="py-10 container mx-auto">
          <h2 className="text-3xl font-medium mb-10 text-center">Phim liên quan</h2>
          <div className="movie-list">
            <Swiper
              grabCursor={"true"}
              spaceBetween={40}
              slidesPerView={"auto"}
              scrollbar={{ draggable: true }}
            >
              {results.length > 0 &&
                results.map((item) => (
                  <SwiperSlide key={item.id}>
                    <MovieCard item={item}></MovieCard>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      );
    }
  }
}

export default MovieDetailPage;
