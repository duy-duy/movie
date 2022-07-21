import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    const headerMenu = document.querySelector(".header-menu");
    const headerNavigation = document.querySelector(".header-navigation");
    const headerClose = document.querySelector(".header-close");
    headerMenu.addEventListener("click", (e) => {
      headerNavigation.classList.add("is-active");
      headerClose.classList.add("is-active");
    });
    headerClose.addEventListener("click", (e) => {
      headerNavigation.classList.remove("is-active");
      headerClose.classList.remove("is-active");
    });
  }, []);
  return (
    <header className="header bg-[#333] text-bold font-medium fixed top-0 left-0 right-0 h-[70px] z-50">
      <div className="container m-auto">
        <div className="flex items-center justify-between text-white py-2 mb-10">
          <NavLink to="/" className="w-[40%] header-img">
            <img src="./img/logo.png" alt="" className="w-[60px] object-cover" />
          </NavLink>
          <div className="flex gap-x-6 uppercase header-navigation flex-1 justify-between">
            <div className="flex gap-x-6 header-info">
              <NavLink to="/" className={({ isActive }) => (isActive ? "text-primary" : "")}>
                Trang chủ
              </NavLink>
              <NavLink
                to="/tat-ca-phim"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Tất cả phim
              </NavLink>
            </div>
            {/* <span>Thể loại</span> */}
            <div className="flex gap-x-6 uppercase header-info">
              <span className="cursor-pointer">Đăng nhập</span>
              <span className="cursor-pointer">Đăng ký</span>
            </div>
          </div>
          {/* <div className="flex gap-x-6 uppercase header-hidden">
            <span>Đăng nhập</span>
            <span>Đăng ký</span>
          </div> */}
          <div className="hidden header-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <div className="header-close z-10 cursor-pointer p-5 top-0 right-0 fixed hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
