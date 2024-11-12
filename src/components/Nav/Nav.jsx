import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faBook, faHome, faComments, faUserCircle } from '@fortawesome/free-solid-svg-icons';
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
          <FontAwesomeIcon icon={faHandHoldingHeart} className="nav-icon" />
        </Link>
        <Link
          to="/onedayclass" // OnedayClassHome 경로로 이동
          className={`nav-item ${location.pathname === "/onedayclass" ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faBook} className="nav-icon" />
        </Link>
        <Link
          to="/somepage2" // 다른 페이지 경로로 변경
          className={`nav-item ${location.pathname === "/somepage2" ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faHome} className="nav-icon" />
        </Link>
        <Link
          to="/somepage3" // 다른 페이지 경로로 변경
          className={`nav-item ${location.pathname === "/somepage3" ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faComments} className="nav-icon" />
        </Link>
        <Link
          to="/somepage4" // 다른 페이지 경로로 변경
          className={`nav-item ${location.pathname === "/somepage4" ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faUserCircle} className="nav-icon" />
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
