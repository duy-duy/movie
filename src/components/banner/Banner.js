import React from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import Button from "../button/Button";

const Banner = ({ item }) => {
  const { title, poster_path, genre_ids, id } = item;
  const { data } = useSWR(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=3c55575bb8f2963a94b7fb46c09ff89c`,
    fetcher
  );
  const genres = data?.genres || [];
  const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="banner-overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        // src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        src={tmdbAPI.image(poster_path, "original")}
        alt="Avengers"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full banner-content text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div key={item.id} className="flex items-center gap-x-3 mb-8 banner-category">
          {genres.length > 0 &&
            genres.map((item) =>
              genre_ids.includes(item.id) ? (
                <span
                  key={item.id}
                  className="py-2 px-4 border border-white rounded-lg banner-category-item"
                >
                  {item.name}
                </span>
              ) : (
                ""
              )
            )}
        </div>
        <Button onClick={() => navigate(`/tat-ca-phim/${id}`)} className="w-auto">
          Xem ngay
        </Button>
      </div>
    </div>
  );
};

export default Banner;
