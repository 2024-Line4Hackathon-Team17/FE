import React, { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { PiHandsClappingFill, PiHandsClappingLight, PiHeartFill, PiHeart, PiConfettiFill, PiConfetti, PiCloverFill, PiClover } from "react-icons/pi";

const EmpathyCard = ({ index }) => {
    const [empathyIndex, setEmpathyIndex] = useState(-1);
    const [showOptions, setShowOptions] = useState(false);

    const clickEmpathy = (index) => {
        if (index !== empathyIndex) {
            setEmpathyIndex(index);
        } else setEmpathyIndex(-1);
    }

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
                <div className="empathy_content_area">
                    <div className="empathy_content">
                        <div className="empathy_top">
                            <div className="empathy_top_nickname">
                                <span>앵그리맨</span>
                            </div>
                            <div className="empathy_top_list btn" onClick={() => toggleOptions(index)}>
                                <BsThreeDots />
                                {showOptions && (
                                    <ul className="empathy_top_list_options">
                                        <li className='btn'>신고</li>
                                        <li className='btn'>차단</li>
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
                        <div className="empathy_bottom">
                            <div className="empathy_bottom_btn">
                                <div className="empathy_btn_clap empathy_btn btn">

                                    {empathyIndex === 0 ?
                                        <PiHandsClappingFill className='empathy_btn_icon clap_fill' onClick={() => clickEmpathy(-1)} /> :
                                        <PiHandsClappingLight className='empathy_btn_icon' onClick={() => clickEmpathy(0)} />
                                    }
                                </div>
                                <div className="empathy_btn_line"></div>
                                <div className="empathy_btn_heart empathy_btn btn">
                                    {empathyIndex === 1 ?
                                        <PiHeartFill className='empathy_btn_icon heart_fill' onClick={() => clickEmpathy(-1)} /> :
                                        <PiHeart className='empathy_btn_icon' onClick={() => clickEmpathy(1)} />
                                    }
                                </div>
                                <div className="empathy_btn_line"></div>
                                <div className="empathy_btn_congrats empathy_btn btn">
                                    {empathyIndex === 2 ?
                                        <PiConfettiFill className='empathy_btn_icon confetti_fill' onClick={() => clickEmpathy(-1)} /> :
                                        <PiConfetti className='empathy_btn_icon' onClick={() => clickEmpathy(2)} />
                                    }
                                </div>
                                <div className="empathy_btn_line"></div>
                                <div className="empathy_btn_lucky empathy_btn btn">
                                    {empathyIndex === 3 ?
                                        <PiCloverFill className='empathy_btn_icon clover_fill' onClick={() => clickEmpathy(-1)} /> :
                                        <PiClover className='empathy_btn_icon' onClick={() => clickEmpathy(3)} />
                                    }
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