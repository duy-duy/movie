import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Banner from "./Banner";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useSWR from "swr";
import { fetcher } from "../../config";

SwiperCore.use([Navigation, Pagination]);

const BannerList = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=3c55575bb8f2963a94b7fb46c09ff89c`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <Swiper
      grabCursor={"true"}
      spaceBetween={40}
      slidesPerView={"auto"}
      navigation
      pagination={{ clickable: true }}
    >
      {movies.length > 0 &&
        movies.map((item) => (
          <SwiperSlide key={item.id}>
            <Banner
              image={
                "https://vtv1.mediacdn.vn/2019/4/26/poster-payoff-1-1556273680151870157160-crop-1556273779257196175768.jpg"
              }
              item={item}
            ></Banner>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default BannerList;
