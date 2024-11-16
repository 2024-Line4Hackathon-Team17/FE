import React, { useState } from "react";
import {
    PiMapPinSimpleArea,
    PiCalendarCheck,
    PiDotsThreeLight,
} from "react-icons/pi";
import axios from "axios";

const MyPagePotCard = ({ index, category, colors, openModal, onDelete }) => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions((prev) => !prev);
    };

    const handleDelete = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found.");
            return;
        }

        try {
            await axios.delete(
                `${process.env.REACT_APP_API}/pating/myposts/${category.id}/delete/`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert("팟팅이 성공적으로 삭제되었습니다.");
            onDelete(category.id);
        } catch (error) {
            console.error("Failed to delete post:", error);
            alert("팟팅 삭제에 실패했습니다.");
        }
    };

    return (
        <div
            className="mypage_pot_card_container"
            style={{
                backgroundColor: colors[index % colors.length],
                transform: `translateY(-${index * 75}px`,
                position: "relative",
                zIndex: index,
            }}
        >
            <div className="mypage_pot_card_inner_container">
                <div className="mypage_pot_card_top">
                    <div className="mypage_pot_card_img">
                        <img src={category.userProfileImage} alt="프로필" />
                    </div>
                    <div
                        className="mypage_pot_card_nickname_title btn"
                        onClick={() =>
                            openModal(category, colors[index % colors.length])
                        }
                    >
                        <p
                            style={{
                                color:
                                    index % colors.length === 0 ||
                                    index % colors.length === 1
                                        ? "#E6E8ED"
                                        : "#503939",
                            }}
                        >
                            {category.userNickname}
                        </p>
                        <p
                            style={{
                                color:
                                    index % colors.length === 0 ||
                                    index % colors.length === 1
                                        ? "#E6E8ED"
                                        : "#503939",
                            }}
                        >
                            {category.title}
                        </p>
                    </div>
                    <div className="mypage_pot_card_list">
                        <PiDotsThreeLight
                            className="mypage_pot_card_list_icon btn"
                            onClick={() => toggleOptions(category.id)}
                            style={{
                                color:
                                    index % colors.length === 0 ||
                                    index % colors.length === 1
                                        ? "#E6E8ED"
                                        : "#503939",
                                width: "28px",
                                height: "28px",
                            }}
                        />
                        {showOptions && (
                            <ul className="empathy_top_list_options mypage_top_list_options">
                                <li className="btn" onClick={handleDelete}>
                                    삭제하기
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className="mypage_pot_card_mid">
                    <div className="mypage_pot_card_place_date">
                        <div className="mypage_pot_card_place">
                            <PiMapPinSimpleArea
                                className="mypage_pot_card_place_icon"
                                style={{
                                    color:
                                        index % colors.length === 0 ||
                                        index % colors.length === 1
                                            ? "#E6E8ED"
                                            : "#503939",
                                }}
                            />
                            <span
                                style={{
                                    color:
                                        index % colors.length === 0 ||
                                        index % colors.length === 1
                                            ? "#E6E8ED"
                                            : "#503939",
                                }}
                            >
                                {category.location}
                            </span>
                        </div>
                        <div className="mypage_pot_card_date">
                            <PiCalendarCheck
                                className="mypage_pot_card_date_icon"
                                style={{
                                    color:
                                        index % colors.length === 0 ||
                                        index % colors.length === 1
                                            ? "#E6E8ED"
                                            : "#503939",
                                }}
                            />
                            <span
                                style={{
                                    color:
                                        index % colors.length === 0 ||
                                        index % colors.length === 1
                                            ? "#E6E8ED"
                                            : "#503939",
                                }}
                            >
                                {category.time}
                            </span>
                        </div>
                    </div>
                    <div className="mypage_pot_card_person">
                        <span>
                            {category.participants_count}/
                            {category.max_participants}
                        </span>
                    </div>
                </div>
                <div className="mypage_pot_card_bottom">
                    <div className="mypage_pot_card_text">
                        <span
                            style={{
                                color:
                                    index % colors.length === 0 ||
                                    index % colors.length === 1
                                        ? "#E6E8ED"
                                        : "#503939",
                            }}
                        >
                            {category.content}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPagePotCard;
