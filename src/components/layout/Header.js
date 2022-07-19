import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header bg-[#333] text-bold font-medium fixed top-0 left-0 right-0 h-[70px] z-50">
      <div className="container m-auto">
        <div className="flex items-center justify-between text-white py-2 mb-10">
          <img src="./img/logo.png" alt="" className="w-[60px] object-cover" />
          <div className="flex gap-x-6 uppercase">
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-primary" : "")}>
              Trang chủ
            </NavLink>
            <NavLink
              to="/tat-ca-phim"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Tất cả phim
            </NavLink>
            <span>Thể loại</span>
          </div>
          <div className="flex gap-x-6 uppercase">
            <span>Đăng nhập</span>
            <span>Đăng ký</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
