import React, { useState } from 'react';
import { PiBell } from "react-icons/pi";
import { Link } from 'react-router-dom';

const EmpathyHeader = () => {
  const [unreadNotifications, setUnreadNotifications] = useState(true);

  return (
    <header className='empathy_header_container'>
      <div className="empathy_header_inner_container">
        <Link to={'/notice'}>
          <div className="empathy_header_alarm_area btn">
            <PiBell className='empathy_header_alarm' />
            {unreadNotifications && <span className="notification-dot"></span>}
          </div>
        </Link>
      </div>
    </header>
  )
}

export default EmpathyHeader