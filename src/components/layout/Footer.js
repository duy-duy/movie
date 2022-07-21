import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#333] pb-6 pt-6">
      <div className="grid grid-cols-4 gap-5 container m-auto footer">
        <div className="">
          <img src="./img/logo.png" alt="" className="w-32 h-32 object-container m-auto mb-6" />
          <p className="tracking-widest">
            Copyright 2021 ©{" "}
            <a href="/" className="text-primary">
              The Movies
            </a>{" "}
            Xem phim mới miễn phí nhanh chất lượng cao. Xem Phim online Việt Sub, Thuyết minh, lồng
            tiếng chất lượng HD. Xem phim nhanh online chất lượng cao
          </p>
        </div>
        <div className="cursor-pointer">
          <span className="h-32 flex flex-col justify-end text-primary cursor-auto mb-6 text-3xl footer-title">
            Phim Mới
          </span>
          <span className="block mb-3 hover:text-primary">Phim lẻ mới</span>
          <span className="block mb-3 hover:text-primary">Phim bộ mới</span>
          <span className="block mb-3 hover:text-primary">Phim chiếu rạp</span>
          <span className="block mb-3 hover:text-primary">Phim sắp chiếu</span>
          <span className="block mb-3 hover:text-primary">Phim thuyết minh</span>
        </div>
        <div className="cursor-pointer">
          <span className="h-32 flex flex-col justify-end text-primary cursor-auto mb-6 text-3xl footer-title">
            Phim Lẻ
          </span>
          <span className="block mb-3 hover:text-primary">Phim hành động</span>
          <span className="block mb-3 hover:text-primary">Phim kiếm hiệp</span>
          <span className="block mb-3 hover:text-primary">Phim kinh dị</span>
          <span className="block mb-3 hover:text-primary">Phim viễn tưởng</span>
          <span className="block mb-3 hover:text-primary">Phim hoạt hình</span>
        </div>
        <div className="cursor-pointer">
          <span className="h-32 flex flex-col justify-end text-primary cursor-auto mb-6 text-3xl footer-title">
            Phim Bộ
          </span>
          <span className="block mb-3 hover:text-primary">Phim bộ Hàn Quốc</span>
          <span className="block mb-3 hover:text-primary">Phim bộ Trung Quốc</span>
          <span className="block mb-3 hover:text-primary">Phim bộ Mỹ</span>
          <span className="block mb-3 hover:text-primary">Phim bộ Việt Nam</span>
          <span className="block mb-3 hover:text-primary">Phim bộ Hồng Kông</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
