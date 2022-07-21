import React from "react";
import Button from "../button/Button";
import useSWRInfinite from "swr/infinite";
import { fetcher } from "../../config";

const LoadMore = ({ url, movies, loading }) => {
  const { data, size, setSize } = useSWRInfinite(
    (index) => url.replace("page=1", `page=${index + 1}`),
    fetcher
  );
  movies = data ? data.reduce((a, b) => a.concat(b.results), []) : [];
  console.log("LoadMore ~ movies", movies);
  return (
    <div className="my-10 text-center load-more hidden">
      <Button className="inline-block w-auto" onClick={() => setSize(size + 1)}>
        Xem thêm
      </Button>
    </div>
  );
};

export default LoadMore;
