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
          className={`nav-item ${
            location.pathname === "/onedayclass" || location.pathname === "/onedayclass-category" ? "active" : ""
          }`}
        >
          <PiBookOpenText className="nav-icon" />
        </Link>
        <Link
  to="/PotMainpage" // PotMainpage.jsx로 이동하도록 경로 수정
  className={`nav-item ${location.pathname === "/PotMainpage" ? "active" : ""}`}
>
  <GoHome className="nav-icon" />
</Link>
<Link
  to="/livechat" // LiveChatListPage.jsx로 이동하도록 경로 수정
  className={`nav-item ${location.pathname === "/livechat" || location.pathname ==="/livechat/id" ? "active" : ""}`}
>
  <PiChatsCircle className="nav-icon" />
</Link>

<Link
  to="/Mypage" // Mypage.jsx로 이동하도록 경로 수정
  className={`nav-item ${location.pathname === "/Mypage" || location.pathname==="/mypage/poting" ||location.pathname==="/mypage/empathy" ||location.pathname==="/mypage/update/info" ||location.pathname==="/mypage/poting/attend"||location.pathname==="/notice" ? "active" : ""}`}
>
  <PiUserCircle className="nav-icon" />
</Link>
      </nav>
    </div>
  );
}

export default Nav;
