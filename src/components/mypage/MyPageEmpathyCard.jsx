import React, { useState } from 'react';
import { PiDotsThreeLight } from "react-icons/pi";


const MyPageEmpathyCard = ({ index }) => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = (openIndex) => {
        if (openIndex === index) {
            setShowOptions(!showOptions);
        }
    };

    return (
        <div className='empathy_card_container'>
            <div className="empathy_card_inner_container">
                <div className="empathy_profile_area">
                    <div className="empathy_profile">
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSi4g-BPfFytBfUl7e4AgXFRam8kB5Mv5WT8LkrmYBBlSAxD7cE" alt="프로필" />
                    </div>
                </div>
                <div className="empathy_content_area mypage_empathy_content_area">
                    <div className="empathy_content mypage_empathy_content">
                        <div className="empathy_top">
                            <div className="empathy_top_nickname">
                                <span>앵그리맨</span>
                            </div>
                            <div className="empathy_top_list btn" onClick={() => toggleOptions(index)}>
                                <PiDotsThreeLight style={{width: '28px', height: '28px'}} />
                                {showOptions && (
                                    <ul className="empathy_top_list_options mypage_top_list_options">
                                        <li className='btn'>삭제하기</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="empathy_mid">
                            <div className="empathy_mid_title">
                                <span>사장님......</span>
                            </div>
                            <div className="emapthy_mid_text">
                                <span>일이 너무 많아요 힘들어요 그만..!!!!! 밥이라도 주시던가요.....</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPageEmpathyCard