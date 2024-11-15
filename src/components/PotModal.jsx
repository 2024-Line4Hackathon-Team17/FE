import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import "../styles/PotModal.scss";
import closed from "../assets/modalclose.png";
import more from "../assets/modalmore.png";
import CalendarCheck from "../assets/CalendarCheckW.png";
import MapPin from "../assets/MapPinSimpleAreaW.png";
import CalendarCheckB from "../assets/CalendarCheckB.png";
import MapPinB from "../assets/MapPinSimpleAreaB.png";
import sample from "../assets/sample.jpg";
import axios from "axios";
import UserInfoModal from "./UserInfoModal";

const API_URL = `http://127.0.0.1:8000/pating/posts/`;
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNjk3MzAzLCJpYXQiOjE3MzE2OTM3MDMsImp0aSI6IjM3YWJiYjdjYTQxMzQ4NmU5MDQwZGFmYjA4MWQ1ZGQ3IiwidXNlcl9pZCI6MX0.zORy96HTnFSm37gN3-qOUFRjqGMv4qfnY1k_juiStH4";

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
    const handleChat = () => {
        navigate(`/livechat/id`); // 채팅방 경로로 이동
    };

    // 전체 사용자 목록
    const fetchUserInfo = async () => {
        try {
            const username = category.created_by; // username 기반
            const response = await axios.get(
                `http://127.0.0.1:8000/user/register/`, // 전체 사용자 목록 가져오기
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // username과 매칭되는 사용자 정보 필터링
            const userInfo = response.data.find(
                (user) => user.username === username
            );
            console.log("Fetched User Info:", userInfo);
            if (userInfo) {
                setUserInfo(userInfo); // 일치하는 사용자 정보를 상태에 저장
                setShowUserModal(true); // 모달 열기
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
                const response = await axios.post(
                    `http://127.0.0.1:8000/pating/posts/${category.id}/join/`,
                    {
                        post: category.id, // 참여할 게시글 ID
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                console.log("Participation Success:", response.data);

                // 상태 업데이트
                setIsParticipated(true);
                setAttendedCount(attendedCount + 1);
                setShowConfirmation(true);

                // 페이지 새로고침
                setTimeout(() => {
                    window.location.reload(); // 페이지 새로고침
                }, 1000); // 1초 후 새로고침
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
