import React, { useState, useEffect } from "react";
import "../styles/PotModal.scss";

import closed from "../assets/modalclose.png";
import more from "../assets/modalmore.png";
import CalendarCheck from "../assets/CalendarCheckW.png";
import MapPin from "../assets/MapPinSimpleAreaW.png";

const Modal = ({
    backgroundColor,
    category,
    onClose,
    onIdClick,
    incrementAttended,
}) => {
    const [isParticipated, setIsParticipated] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [attendedCount, setAttendedCount] = useState(category.attended);
    const [showOptions, setShowOptions] = useState(false); // 드롭다운 메뉴 상태 관리

    const handleParticipation = () => {
        if (!isParticipated) {
            setIsParticipated(true);
            setAttendedCount(attendedCount + 1);
            incrementAttended();
            setShowConfirmation(true);

            setTimeout(() => setShowConfirmation(false), 5000);
        }
    };

    const toggleOptions = (e) => {
        e.stopPropagation();
        setShowOptions((prev) => !prev);
    };

    const handleReport = () => {
        // 신고 기능 로직 추가
        alert("신고가 접수되었습니다.");
    };

    const handleBlock = () => {
        // 차단 기능 로직 추가
        alert("사용자가 차단되었습니다.");
    };

    useEffect(() => {
        setAttendedCount(category.attended);
    }, [category.attended]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{ backgroundColor }}
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

                        {/* 드롭다운 메뉴 */}
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
                                        src={category.icon}
                                        alt={category.title}
                                        className="Modalboximg"
                                    />
                                </div>

                                <div className="ModalDetailTitle">
                                    <div
                                        className="ModalId"
                                        onClick={onIdClick}
                                    >
                                        {category.id}
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
                                                    src={MapPin}
                                                    alt="Map Icon"
                                                    className="Modaldetailimgsrc"
                                                />
                                            </div>
                                            <div className="modaldetailtxt">
                                                {category.place}
                                            </div>
                                        </div>
                                        <div className="ModalDetailDate">
                                            <div className="ModalDetailimg">
                                                <img
                                                    src={CalendarCheck}
                                                    alt="Calendar Icon"
                                                    className="Modaldetailimgsrc"
                                                />
                                            </div>
                                            <div className="modaldetailtxt">
                                                {category.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ModalBoxDetailinfobox">
                                <div className="ModalBoxDetailinfo">
                                    {category.text}
                                </div>
                                <div className="ModalBoxLeft">
                                    <div className="ModalBoxLeftbox">
                                        <div className="ModalpotAttended">
                                            {attendedCount}
                                        </div>
                                        <div>/</div>
                                        <div className="ModalpotAvailable">
                                            {category.available}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ModalLast">
                        <button>채팅하기</button>
                        <button onClick={handleParticipation}>참여하기</button>
                    </div>
                    {showConfirmation && (
                        <div className="confirmation-message">
                            참여가 완료되었습니다!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
