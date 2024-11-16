import React from "react";
import "../styles/UserInfoModal.scss";
import closed from "../assets/modalclose.png";
import femaleIcon from "../assets/GenderFemale.png";
import maleIcon from "../assets/GenderMale.png";
import sample from "../assets/iconimage.jpg";

// 관심사 목록
const interestsList = [
    { id: 1, name: "운동" },
    { id: 2, name: "뮤지컬" },
    { id: 3, name: "수공예" },
    { id: 4, name: "스터디" },
    { id: 5, name: "그림" },
    { id: 6, name: "뷰티" },
    { id: 7, name: "코딩" },
    { id: 8, name: "댄스" },
    { id: 9, name: "맛집탐방" },
    { id: 10, name: "스포츠 직관" },
];

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

    // 관심사를 ID에서 이름으로 변환하는 함수
    const mapInterests = (interestIds) => {
        return interestIds
            .map(
                (id) =>
                    interestsList.find((interest) => interest.id === id)?.name
            )
            .filter(Boolean); // `null` 또는 `undefined` 값 제거
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="idinfobox">
                    <div className="idinfoboxTop">
                        <div className="ageinfobox">
                            <div className="ageandclose">
                                <div className="agetxt">
                                    <div className="idage">
                                        {/* 나이가 비어 있을 경우 대체 텍스트 표시 */}
                                        {userInfo.birth_date
                                            ? `만 ${
                                                  new Date().getFullYear() -
                                                  new Date(
                                                      userInfo.birth_date
                                                  ).getFullYear()
                                              }세`
                                            : "나이 정보 없음"}
                                    </div>
                                    <div className="idgender">
                                        <div className="gender-icon">
                                            {/* 성별 아이콘 표시 */}
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
                                            ) : (
                                                <span>성별 정보 없음</span>
                                            )}
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
                            {/* 주소가 비어 있을 경우 대체 텍스트 표시 */}
                            <div className="idinfowhere">
                                {userInfo.address || "주소 정보 없음"}
                            </div>
                        </div>
                    </div>
                    <div className="idinfoboxMain">
                        <div className="idinfoimg">
                            <img
                                src={userInfo.profile_picture || sample}
                                className="idinfoimgsrc"
                                alt="Profile"
                            />
                        </div>
                        <div className="idinfoid">
                            {/* 사용자 ID 표시 */}
                            {userInfo.username || "ID 정보 없음"}
                        </div>
                        <div className="idinfoname">
                            {/* 이름 마스킹 처리 */}
                            {userInfo.name
                                ? maskCenterName(userInfo.name)
                                : "이름 정보 없음"}
                        </div>
                    </div>
                    <div className="idinfobottom">
                        <div className="choices">
                            {/* 관심사가 없을 경우 대체 텍스트 표시 */}
                            {userInfo.interests && userInfo.interests.length > 0
                                ? mapInterests(userInfo.interests).map(
                                      (interestName, index) => (
                                          <div key={index} className="choice">
                                              {interestName}
                                          </div>
                                      )
                                  )
                                : "관심사 정보 없음"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfoModal;
