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
import axios from "axios";

const EmpathyCard = ({ post }) => {
    const [empathyType, setEmpathyType] = useState(post.user_reaction); // 초기 상태
    const [showOptions, setShowOptions] = useState(false);

    // 공감 버튼 클릭 처리
    const handleReaction = async (reactionType) => {
        try {
            const token = localStorage.getItem("token"); // 동적으로 토큰 가져오기
            const isCancel = empathyType === reactionType; // 같은 타입을 클릭하면 취소
            const payload = {
                reaction_type: reactionType, // 요청은 동일한 형식으로 전송
            };

            const response = await axios.post(
                `${process.env.REACT_APP_API}/community/posts/${post.id}/react/`, // 프록시 서버 사용
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("API Response:", response.data);

            // 상태 업데이트
            setEmpathyType(isCancel ? null : reactionType); // 취소면 null, 아니면 클릭한 타입
        } catch (error) {
            console.error(
                "Error updating reaction:",
                error.response?.data || error.message
            );
            alert(
                error.response?.data?.detail ||
                    "공감을 처리하는 중 문제가 발생했습니다."
            );
        }
    };

    // 옵션 메뉴 토글
    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    // 차단 기능
    const handleBlock = async () => {
        try {
            const token = localStorage.getItem("token"); // 동적으로 토큰 가져오기
            const response = await axios.post(
                `${process.env.REACT_APP_API}/community/posts/${post.id}/block/`, // 프록시 서버 사용
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
            const token = localStorage.getItem("token"); // 동적으로 토큰 가져오기
            const response = await axios.post(
                `${process.env.REACT_APP_API}/community/posts/${post.id}/report/`, // 프록시 서버 사용
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
                                <div
                                    className="empathy_btn_clap empathy_btn btn"
                                    onClick={() => handleReaction("support")}
                                >
                                    {empathyType === "support" ? (
                                        <PiHandsClappingFill className="empathy_btn_icon clap_fill" />
                                    ) : (
                                        <PiHandsClappingLight className="empathy_btn_icon" />
                                    )}
                                </div>
                                <div className="empathy_btn_line"></div>
                                <div
                                    className="empathy_btn_heart empathy_btn btn"
                                    onClick={() => handleReaction("empathy")}
                                >
                                    {empathyType === "empathy" ? (
                                        <PiHeartFill className="empathy_btn_icon heart_fill" />
                                    ) : (
                                        <PiHeart className="empathy_btn_icon" />
                                    )}
                                </div>
                                <div className="empathy_btn_line"></div>
                                <div
                                    className="empathy_btn_congrats empathy_btn btn"
                                    onClick={() =>
                                        handleReaction("congratulations")
                                    }
                                >
                                    {empathyType === "congratulations" ? (
                                        <PiConfettiFill className="empathy_btn_icon confetti_fill" />
                                    ) : (
                                        <PiConfetti className="empathy_btn_icon" />
                                    )}
                                </div>
                                <div className="empathy_btn_line"></div>
                                <div
                                    className="empathy_btn_lucky empathy_btn btn"
                                    onClick={() => handleReaction("luck")}
                                >
                                    {empathyType === "luck" ? (
                                        <PiCloverFill className="empathy_btn_icon clover_fill" />
                                    ) : (
                                        <PiClover className="empathy_btn_icon" />
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
