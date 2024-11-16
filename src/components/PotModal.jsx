import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import "../styles/PotModal.scss";
import closed from "../assets/modalclose.png";
import more from "../assets/modalmore.png";
import CalendarCheck from "../assets/CalendarCheckW.png";
import MapPin from "../assets/MapPinSimpleAreaW.png";
import CalendarCheckB from "../assets/CalendarCheckB.png";
import MapPinB from "../assets/MapPinSimpleAreaB.png";
import sample from "../assets/iconimage.jpg";
import axios from "axios";
import UserInfoModal from "./UserInfoModal";

const Modal = ({
    backgroundColor,
    category,
    onClose,
    onIdClick,
    fontColor,
}) => {
    const navigate = useNavigate(); // useNavigate
    const [isParticipated, setIsParticipated] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [attendedCount, setAttendedCount] = useState(0); // 초기 값 0으로 설정
    const [showOptions, setShowOptions] = useState(false); // 드롭다운 메뉴 상태 관리

    const [userInfo, setUserInfo] = useState(null); // 사용자 정보 상태 추가
    const [showUserModal, setShowUserModal] = useState(false); // 사용자 모달 상태 추가

    //채팅방 연결
    const handleChat = async () => {
        try {
            const token = localStorage.getItem("token");
            console.log("category object:", category);
            console.log("post_id:", category.id);

            console.log("post_id being sent:", category.id);
            console.log("API URL:", process.env.REACT_APP_API);
            console.log("토큰:", token);

            const response = await axios.post(
                `http://127.0.0.1:8000/api/chatrooms/create/`,
                { post_id: category.id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            const { chat_room_id } = response.data;
            console.log("Chat Room ID:", chat_room_id);

            navigate(`/livechat/${chat_room_id}`);
        } catch (error) {
            console.error(
                "Failed to create or fetch chat room:",
                error.response?.data || error.message
            );

            if (error.response?.data?.detail) {
                alert(error.response.data.detail);

                if (
                    error.response.data.detail === "Chat room already exists."
                ) {
                    const chatRoomId = error.response.data.chat_room_id;
                    navigate(`/livechat/${chatRoomId}`);
                }
            } else {
                alert("채팅방 생성 중 문제가 발생했습니다.");
            }
        }
    };

    // 전체 사용자 목록
    const fetchUserInfo = async () => {
        try {
            const token = localStorage.getItem("token"); // 토큰 동적으로 가져오기
            const username = category.created_by;
            const response = await axios.get(
                `${process.env.REACT_APP_API}/user/register/`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // 동적으로 가져온 토큰
                    },
                }
            );

            const userInfo = response.data.find(
                (user) => user.username === username
            );
            console.log("Fetched User Info:", userInfo);
            if (userInfo) {
                setUserInfo(userInfo);
                setShowUserModal(true);
            } else {
                alert("사용자 정보를 찾을 수 없습니다.");
            }
        } catch (error) {
            console.error(
                "Error fetching user info:",
                error.response?.data || error.message
            );
            alert("사용자 정보를 가져오는 데 문제가 발생했습니다.");
        }
    };

    const handleParticipation = async () => {
        if (!isParticipated) {
            try {
                const token = localStorage.getItem("token"); // 토큰 동적으로 가져오기
                const response = await axios.post(
                    `${process.env.REACT_APP_API}/pating/posts/${category.id}/join/`, // 프록시를 이용한 상대 경로
                    {
                        post: category.id, // 참여할 게시글 ID
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`, // 동적으로 가져온 토큰
                            "Content-Type": "application/json",
                        },
                    }
                );

                console.log("Participation Success:", response.data);
                setIsParticipated(true);
                setAttendedCount(attendedCount + 1);
                setShowConfirmation(true);

                setTimeout(() => {
                    window.location.reload(); // 페이지 새로고침
                }, 1000);
            } catch (error) {
                console.error(
                    "Error joining post:",
                    error.response?.data || error.message
                );
                alert("참여 중 문제가 발생했습니다.");
            }
        }
    };

    const toggleOptions = (e) => {
        e.stopPropagation();
        setShowOptions((prev) => !prev);
    };

    const handleReport = () => {
        alert("신고가 접수되었습니다.");
    };

    const handleBlock = () => {
        alert("사용자가 차단되었습니다.");
    };

    useEffect(() => {
        setAttendedCount(category.participants_count);
    }, [category.participants_count]);

    // 아이콘 선택 로직
    const calendarIcon =
        backgroundColor === "#E6E8ED" || backgroundColor === "#D7CCAF"
            ? CalendarCheckB
            : CalendarCheck;
    const mapPinIcon =
        backgroundColor === "#E6E8ED" || backgroundColor === "#D7CCAF"
            ? MapPinB
            : MapPin;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{ backgroundColor, color: fontColor }}
            >
                <div className="modalbox">
                    <div className="modaltop">
                        <button onClick={toggleOptions}>
                            <img
                                src={more}
                                className="modalmoreicon"
                                alt="More"
                            />
                        </button>
                        <button onClick={onClose}>
                            <img
                                src={closed}
                                className="modalclosedicon"
                                alt="Close"
                            />
                        </button>

                        {showOptions && (
                            <div className="dropdown-menu">
                                <div
                                    onClick={handleReport}
                                    className="dropdown-item"
                                >
                                    신고
                                </div>
                                <div
                                    onClick={handleBlock}
                                    className="dropdown-item"
                                >
                                    차단
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="Modalmain">
                        <div className="potModalbox">
                            <div className="Modalboxtop">
                                <div className="ModalBoxImg">
                                    <img
                                        src={sample} // 임의의 이미지 사용
                                        alt={category.title}
                                        className="Modalboximg"
                                    />
                                </div>

                                <div className="ModalDetailTitle">
                                    <div
                                        className="ModalId"
                                        onClick={fetchUserInfo}
                                    >
                                        {category.created_by}
                                    </div>
                                    <div className="ModalPotTitle">
                                        {category.title}
                                    </div>
                                </div>
                            </div>
                            <div className="ModalBoxInfo">
                                <div className="potModalbox">
                                    <div className="ModalBoxDetail">
                                        <div className="ModalDetailPlace">
                                            <div className="ModalDetailimg">
                                                <img
                                                    src={mapPinIcon}
                                                    alt="Map Icon"
                                                    className="Modaldetailimgsrc"
                                                />
                                            </div>
                                            <div className="modaldetailtxt">
                                                {category.location}
                                            </div>
                                        </div>
                                        <div className="ModalDetailDate">
                                            <div className="ModalDetailimg">
                                                <img
                                                    src={calendarIcon}
                                                    alt="Calendar Icon"
                                                    className="Modaldetailimgsrc"
                                                />
                                            </div>
                                            <div className="modaldetailtxt">
                                                {category.time}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ModalBoxDetailinfobox">
                                <div className="ModalBoxDetailinfo">
                                    {category.content}
                                </div>
                                <div className="ModalBoxLeft">
                                    <div className="ModalBoxLeftbox">
                                        <div className="ModalpotAttended">
                                            {attendedCount}
                                        </div>
                                        <div>/</div>
                                        <div className="ModalpotAvailable">
                                            {category.max_participants}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ModalLast">
                        <button onClick={handleChat}>채팅하기</button>
                        <button onClick={handleParticipation}>참여하기</button>
                    </div>
                    {showConfirmation && (
                        <div className="confirmation-message">
                            참여가 완료되었습니다!
                        </div>
                    )}
                    {showUserModal && userInfo && (
                        <UserInfoModal
                            userInfo={userInfo}
                            onClose={() => setShowUserModal(false)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
