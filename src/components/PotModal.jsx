// src/components/Modal.jsx
import React, { useState } from "react";
import "../styles/PotModal.scss";

import closed from "../assets/modalclose.png";
import more from "../assets/modalmore.png";

const Modal = ({ backgroundColor, category, onClose, onIdClick }) => {
    const [isParticipated, setIsParticipated] = useState(false); // 참여 상태
    const [leftCount, setLeftCount] = useState(category.left); // 남은 인원 수
    const [showConfirmation, setShowConfirmation] = useState(false); // 확인 메시지 표시 상태

    // 참여하기 버튼 클릭 핸들러
    const handleParticipation = () => {
        setIsParticipated(true);
        setLeftCount(10); // 남은 인원 수를 10으로 설정
        setShowConfirmation(true); // 확인 메시지 표시

        // 5초 후 메시지 숨기기
        setTimeout(() => setShowConfirmation(false), 5000);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{ backgroundColor }}
            >
                <div className="modalbox">
                    <div className="modaltop">
                        <button>
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
                                                    src={category.mapIcon}
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
                                                    src={category.calendarIcon}
                                                    alt="Calendar Icon"
                                                    className="Modaldetailimgsrc"
                                                />
                                            </div>{" "}
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
                                <div className="ModalBoxLeft">{leftCount}</div>
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
