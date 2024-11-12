import React from 'react';
import { PiHandsClappingFill, PiHeartFill, PiConfettiFill, PiCloverFill, PiHandshakeFill } from "react-icons/pi";

const NoticeCard = () => {
    const colors = ['#EAB31B', '#CA5858', '#5189EA', 'rgba(28, 146, 53, 0.77)', '#1C2135'];

    return (
        <div className='notice_card_container'>
            <div className="notice_card_inner_container">
                <div className="notice_card_img_area">
                    <div className="notice_card_img">
                        <PiHandsClappingFill style={{ color: '#EAB31B', width: '25px', height: '25px' }} />
                    </div>
                </div>
                <div className="notice_card_content">
                    <p>팟팅!</p>
                    <p>OO님에게 격려를 받았어요!</p>
                </div>
            </div>
        </div>
    )
}

export default NoticeCard