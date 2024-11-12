import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faBook, faHome, faComments, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../../styles/section/nav/_nav.scss';

function Nav() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <a href="#" className="nav-item">
          <FontAwesomeIcon icon={faHandHoldingHeart} className="nav-icon" />
        </a>
        <a href="#" className="nav-item">
          <FontAwesomeIcon icon={faBook} className="nav-icon" />
        </a>
        <a href="#" className="nav-item">
          <FontAwesomeIcon icon={faHome} className="nav-icon" />
        </a>
        <a href="#" className="nav-item">
          <FontAwesomeIcon icon={faComments} className="nav-icon" />
        </a>
        <a href="#" className="nav-item">
          <FontAwesomeIcon icon={faUserCircle} className="nav-icon" />
        </a>
      </nav>
    </div>
  );
}

export default Nav;
