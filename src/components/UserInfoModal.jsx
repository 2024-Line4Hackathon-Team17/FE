// src/components/UserInfoModal.jsx
import React from "react";
import "../styles/UserInfoModal.scss";
import closed from "../assets/modalclose.png";
import femaleIcon from "../assets/GenderFemale.png";
import maleIcon from "../assets/GenderMale.png";

const UserInfoModal = ({ userInfo, onClose }) => {
    // 이름의 중앙 글자를 *로 바꾸는 함수
    const maskCenterName = (name) => {
        const length = name.length;
        if (length <= 2) return name;
        const mid = Math.floor(length / 2);
        return (
            name.slice(0, mid - (length % 2 === 0 ? 1 : 0)) +
            "*" +
            name.slice(mid + 1)
        );
    };

    // choice 문자열을 빈칸을 기준으로 나누기
    // choice 문자열을 빈칸을 기준으로 나누며, 쉼표를 제거
    const choices = userInfo.choice
        ? userInfo.choice.replace(/,/g, "").split(" ")
        : [];

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="idinfobox">
                    <div className="idinfoboxTop">
                        <div className="ageinfobox">
                            <div className="ageandclose">
                                <div className="agetxt">
                                    <div className="idage">
                                        만 {userInfo.age}세{" "}
                                    </div>
                                    <div className="idgender">
                                        {" "}
                                        <div className="gender-icon">
                                            {userInfo.gender === "female" ? (
                                                <img
                                                    src={femaleIcon}
                                                    alt="Female"
                                                />
                                            ) : userInfo.gender === "male" ? (
                                                <img
                                                    src={maleIcon}
                                                    alt="Male"
                                                />
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                                <div className="closedicon">
                                    <button onClick={onClose}>
                                        <img
                                            src={closed}
                                            className="modalclosedicon"
                                            alt="Close"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="idinfowhere">{userInfo.where}</div>
                        </div>
                    </div>
                    <div className="idinfoboxMain">
                        <div className="idinfoimg">
                            <img
                                src={userInfo.img}
                                className="idinfoimgsrc"
                            ></img>
                        </div>
                        <div className="idinfoid">{userInfo.id}</div>
                        <div className="idinfoname">
                            {maskCenterName(userInfo.name)}
                        </div>
                    </div>
                    <div className="idinfobottom">
                        <div className="choices">
                            {choices.map((choice, index) => (
                                <div key={index} className="choice">
                                    {choice}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfoModal;
