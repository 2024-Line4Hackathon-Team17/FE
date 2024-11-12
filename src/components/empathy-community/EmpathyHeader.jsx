import React, { useState } from 'react';
import { PiBell } from "react-icons/pi";

const EmpathyHeader = () => {
  const [unreadNotifications, setUnreadNotifications] = useState(true);

  return (
    <header className='empathy_header_container'>
        <div className="empathy_header_inner_container">
            <div className="empathy_header_alarm_area btn">
                <PiBell className='empathy_header_alarm' />
                {unreadNotifications && <span className="notification-dot"></span>}
            </div>
        </div>
    </header>
  )
}

export default EmpathyHeader