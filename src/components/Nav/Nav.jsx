import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { PiHandHeart, PiBookOpenText, PiChatsCircle, PiUserCircle } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import '../../styles/section/nav/_nav.scss';

function Nav() {
  const location = useLocation();

  return (
    <div className="nav-container">
      <nav className="nav">
        <Link
          to="/empathy"
          className={`nav-item ${location.pathname === "/empathy" ? "active" : ""}`}
        >
          <PiHandHeart className="nav-icon" />
        </Link>
        <Link
          to="/onedayclass" // OnedayClassHome 경로로 이동
          className={`nav-item ${location.pathname === "/onedayclass" ? "active" : ""}`}
        >
          <PiBookOpenText className="nav-icon" />
        </Link>
        <Link
          to="/somepage2" // 다른 페이지 경로로 변경
          className={`nav-item ${location.pathname === "/somepage2" ? "active" : ""}`}
        >
          <GoHome className="nav-icon" />
        </Link>
        <Link
          to="/somepage3" // 다른 페이지 경로로 변경
          className={`nav-item ${location.pathname === "/somepage3" ? "active" : ""}`}
        >
          <PiChatsCircle className="nav-icon" />
        </Link>
        <Link
          to="/somepage4" // 다른 페이지 경로로 변경
          className={`nav-item ${location.pathname === "/somepage4" ? "active" : ""}`}
        >
          <PiUserCircle className="nav-icon" />
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
