import React, { Fragment } from "react";
import BannerList from "../components/banner/BannerList";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <div className="container mx-auto mt-[150px] banner">
        {/* banner */}
        <section className="h-[500px] mb-20">
          <BannerList></BannerList>
        </section>

        {/* Now playing */}
        <section className="layout pb-20">
          <h2 className="capitalize text-white text-3xl font-bold mb-10">Phim đề cử</h2>
          <MovieList></MovieList>
        </section>

        {/* Top rated */}
        <section className="layout pb-20">
          <h2 className="capitalize text-white text-3xl font-bold mb-10">Phim đánh giá cao</h2>
          <MovieList type="top_rated"></MovieList>
        </section>

        {/* popular */}
        <section className="layout pb-20">
          <h2 className="capitalize text-white text-3xl font-bold mb-10">Phim phổ biến</h2>
          <MovieList type="popular"></MovieList>
        </section>
      </div>
    </Fragment>
  );
};

export default HomePage;
