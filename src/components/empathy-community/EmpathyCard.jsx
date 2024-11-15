import React, { useState } from "react";
import {
    PiHandsClappingFill,
    PiHandsClappingLight,
    PiHeartFill,
    PiHeart,
    PiConfettiFill,
    PiConfetti,
    PiCloverFill,
    PiClover,
    PiDotsThreeLight,
} from "react-icons/pi";
//연동
import axios from "axios";
const API_URL = "http://127.0.0.1:8000/api/community/posts/"; // API URL
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNjg2MjUyLCJpYXQiOjE3MzE2ODI2NTIsImp0aSI6ImY3NmJlMTRkMzAwZDQyYWNhYTVmYWY3Yjk1YmE4MWQ1IiwidXNlcl9pZCI6MX0.ZpL24rAYTGYb47WnnzdAcCKgUj_eymOUQUcSfOZsIw8"; // 실제 토큰

const EmpathyCard = ({ post }) => {
    const [empathyIndex, setEmpathyIndex] = useState(-1);
    const [showOptions, setShowOptions] = useState(false);

    // 공감 버튼 클릭 처리
    const clickEmpathy = async (reactionIndex) => {
        if (reactionIndex !== empathyIndex) {
            setEmpathyIndex(reactionIndex);
            await updateReaction(post.id, reactionIndex); // 서버에 반영
        } else {
            setEmpathyIndex(-1);
            await updateReaction(post.id, null); // 서버에서 반응 삭제
        }
    };
    // 공감 반응 업데이트 함수
    const updateReaction = async (postId, reaction) => {
        try {
            await axios.post(
                `${API_URL}${postId}/reaction/`,
                { reaction },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Reaction updated successfully");
        } catch (error) {
            console.error("Error updating reaction:", error);
        }
    };

    // 옵션 메뉴 토글
    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };
    // 차단 기능
    const handleBlock = async () => {
        try {
            const response = await axios.post(
                `/community/posts/${post.id}/block/`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            alert(response.data.detail || "차단되었습니다.");
        } catch (error) {
            console.error(
                "Error blocking post:",
                error.response?.data || error.message
            );
            alert("차단 중 문제가 발생했습니다.");
        }
    };

    // 신고 기능
    const handleReport = async () => {
        try {
            const response = await axios.post(
                `/community/posts/${post.id}/report/`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            alert(response.data.detail || "신고가 접수되었습니다.");
        } catch (error) {
            console.error(
                "Error reporting post:",
                error.response?.data || error.message
            );
            alert("신고 중 문제가 발생했습니다.");
        }
    };

    return (
        <div className="empathy_card_container">
            <div className="empathy_card_inner_container">
                <div className="empathy_profile_area">
                    <div className="empathy_profile">
                        <img
                            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSi4g-BPfFytBfUl7e4AgXFRam8kB5Mv5WT8LkrmYBBlSAxD7cE"
                            alt="프로필"
                        />
                    </div>
                </div>
                <div className="empathy_content_area">
                    <div className="empathy_content">
                        <div className="empathy_top">
                            <div className="empathy_top_nickname">
                                <span>{post.author}</span>
                            </div>
                            <div
                                className="empathy_top_list btn"
                                onClick={toggleOptions}
                            >
                                <PiDotsThreeLight
                                    style={{ width: "28px", height: "28px" }}
                                />
                                {showOptions && (
                                    <ul className="empathy_top_list_options">
                                        <li
                                            className="btn"
                                            onClick={handleReport}
                                        >
                                            신고
                                        </li>
                                        <li
                                            className="btn"
                                            onClick={handleBlock}
                                        >
                                            차단
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="empathy_mid">
                            <div className="empathy_mid_title">
                                <span>{post.title}</span>
                            </div>
                            <div className="emapthy_mid_text">
                                <span>{post.content}</span>
                            </div>
                        </div>
                        <div className="empathy_bottom">
                            <div className="empathy_bottom_btn">
                                <div className="empathy_btn_clap empathy_btn btn">
                                    {empathyIndex === 0 ? (
                                        <PiHandsClappingFill
                                            className="empathy_btn_icon clap_fill"
                                            onClick={() => clickEmpathy(-1)}
                                        />
                                    ) : (
                                        <PiHandsClappingLight
                                            className="empathy_btn_icon"
                                            onClick={() => clickEmpathy(0)}
                                        />
                                    )}
                                </div>
                                <div className="empathy_btn_line"></div>
                                <div className="empathy_btn_heart empathy_btn btn">
                                    {empathyIndex === 1 ? (
                                        <PiHeartFill
                                            className="empathy_btn_icon heart_fill"
                                            onClick={() => clickEmpathy(-1)}
                                        />
                                    ) : (
                                        <PiHeart
                                            className="empathy_btn_icon"
                                            onClick={() => clickEmpathy(1)}
                                        />
                                    )}
                                </div>
                                <div className="empathy_btn_line"></div>
                                <div className="empathy_btn_congrats empathy_btn btn">
                                    {empathyIndex === 2 ? (
                                        <PiConfettiFill
                                            className="empathy_btn_icon confetti_fill"
                                            onClick={() => clickEmpathy(-1)}
                                        />
                                    ) : (
                                        <PiConfetti
                                            className="empathy_btn_icon"
                                            onClick={() => clickEmpathy(2)}
                                        />
                                    )}
                                </div>
                                <div className="empathy_btn_line"></div>
                                <div className="empathy_btn_lucky empathy_btn btn">
                                    {empathyIndex === 3 ? (
                                        <PiCloverFill
                                            className="empathy_btn_icon clover_fill"
                                            onClick={() => clickEmpathy(-1)}
                                        />
                                    ) : (
                                        <PiClover
                                            className="empathy_btn_icon"
                                            onClick={() => clickEmpathy(3)}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmpathyCard;
