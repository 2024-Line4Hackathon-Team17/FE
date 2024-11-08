import React from 'react';
import { PiBell } from "react-icons/pi";

const EmpathyHeader = () => {
  return (
    <header className='empathy_header_container'>
        <div className="empathy_header_inner_container">
            <div className="empathy_header_alarm_area">
                <PiBell className='empathy_header_alarm' />
            </div>
        </div>
    </header>
  )
}

export default EmpathyHeader