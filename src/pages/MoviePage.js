import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard, { MovieCardSkeleton } from "../components/movie/MovieCard";
import { fetcher, tmdbAPI } from "../config";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
import { v4 } from "uuid";
import LoadMore from "../components/loading/LoadMore";

const itemsPerPage = 20;
const MoviePage = () => {
  const [filter, setFilter] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", nextPage));
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  const filterDebounce = useDebounce(filter);
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  // lấy dữ liệu tìm kiếm từ url
  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getMovieSearch(filterDebounce, nextPage));
    } else {
      setUrl(tmdbAPI.getMovieList("popular", nextPage));
    }
  }, [filterDebounce, nextPage]);
  const movies = data?.results || [];
  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  return (
    <div className="container m-auto mt-[150px] movie-all">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Tìm kiếm phim bạn yêu thích"
            className="w-full p-4 bg-slate-800 text-white text-base outline-none"
            onChange={handleFilter}
          />
        </div>
        <button className="p-4 text-white bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {loading && (
        <div className="grid grid-cols-4 gap-10 movies-list">
          {new Array(itemsPerPage).fill(0).map(() => (
            <MovieCardSkeleton key={v4()}></MovieCardSkeleton>
          ))}
        </div>
      )}
      <div className="grid grid-cols-4 gap-10 movies-list">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}>
              {item.id}
            </MovieCard>
          ))}
      </div>

      <div className="mt-10 movie-navigation">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>

      <LoadMore url={url} movies={movies}></LoadMore>
    </div>
  );
};

export default MoviePage;
