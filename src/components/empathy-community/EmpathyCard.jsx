import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { PiHandsClappingFill, PiHeart, PiConfetti, PiClover } from "react-icons/pi";

const EmpathyCard = () => {
    return (
        <div className='empathy_card_container'>
            <div className="empathy_card_inner_container">
                <div className="empathy_profile_area">
                    <div className="empathy_profile">
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSi4g-BPfFytBfUl7e4AgXFRam8kB5Mv5WT8LkrmYBBlSAxD7cE" alt="프로필" />
                    </div>
                </div>
                <div className="empathy_content_area">
                    <div className="empathy_content">
                        <div className="empathy_top">
                            <div className="empathy_top_nickname">
                                <span>앵그리맨</span>
                            </div>
                            <div className="empathy_top_list">
                                <BsThreeDots />
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
                        <div className="empathy_bottom">
                            <div className="empathy_bottom_btn">
                                <div className="empathy_btn_clap empathy_btn">
                                    <PiHandsClappingFill className='empathy_btn_icon' />
                                </div>
                                <div className="empathy_btn_line"></div>
                                <div className="empathy_btn_heart empathy_btn">
                                    <PiHeart className='empathy_btn_icon' />
                                </div>
                                <div className="empathy_btn_line"></div>
                                <div className="empathy_btn_congrats empathy_btn">
                                    <PiConfetti className='empathy_btn_icon' />
                                </div>
                                <div className="empathy_btn_line"></div>
                                <div className="empathy_btn_lucky empathy_btn">
                                    <PiClover className='empathy_btn_icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpathyCard