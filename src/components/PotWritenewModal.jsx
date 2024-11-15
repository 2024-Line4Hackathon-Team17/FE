import React, { useState } from "react";
import "../styles/PotWritenewModal.scss";

import closeIcon from "../assets/modalclose.png";
import CalendarCheck from "../assets/CalendarCheckY.png";
import MapPin from "../assets/MapPinSimpleAreaY.png";
import UpW from "../assets/UpW.png";
import DownW from "../assets/DownW.png";

import DaumPostcode from "react-daum-postcode"; // 주소 검색 API
import axios from "axios";

const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNjkzOTI2LCJpYXQiOjE3MzE2OTAzMjYsImp0aSI6IjkzMDBjMzFmMDRiNjQ0YzNhNDA3OTBlMmJlYjZhZTVjIiwidXNlcl9pZCI6MX0.K4IsHnEIXZCkU7bcvlvntuqX15prZRaQoJ5-W4wrqYI";
const PotWritenewModal = ({ onClose, onPostSubmit }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("카테고리 선택");
    const [categoryValue, setCategoryValue] = useState(""); // 카테고리 ID 저장
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [maxParticipants, setMaxParticipants] = useState(2);
    const [isAddressOpen, setIsAddressOpen] = useState(false);
    const [address, setAddress] = useState("");

    const incrementPeopleCount = () => setMaxParticipants((prev) => prev + 1);
    const decrementPeopleCount = () =>
        setMaxParticipants((prev) => (prev > 1 ? prev - 1 : prev));

    const handleCategorySelect = (selectedCategory, id) => {
        setCategory(selectedCategory);
        setCategoryValue(id);
        setIsCategoryOpen(false);
    };

    const handleAddressComplete = (data) => {
        setAddress(data.address);
        setLocation(data.address); // 서버에 전송할 주소 값
        setIsAddressOpen(false);
    };

    const handleSubmit = async () => {
        const postData = {
            title,
            content,
            location,
            time,
            max_participants: Number(maxParticipants), // 숫자 변환
            category: Number(categoryValue), // 반드시 숫자 변환
        };
        console.log("Post Data:", postData); // 로그 출력
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/pating/posts/",
                postData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Post Success:", response.data);
            // 부모 컴포넌트로 새 글 데이터 전달
            if (onPostSubmit) {
                onPostSubmit(response.data); // 새 글 데이터를 전달
            }

            alert("글 작성이 완료되었습니다!");
            onClose(); // 모달 닫기
        } catch (error) {
            console.error("Error creating post:", error);
            alert("글 작성 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="close-button">
                    <img src={closeIcon} alt="Close" />
                </button>
                <div className="WriteTop">
                    <div
                        className="writeSelectcategory"
                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    >
                        {category}
                    </div>
                    {isCategoryOpen && (
                        <div className="category-dropdown">
                            <div
                                onClick={() => handleCategorySelect("운동", 1)}
                            >
                                운동
                            </div>
                            <div
                                onClick={() => handleCategorySelect("카페", 2)}
                            >
                                카페
                            </div>
                            <div
                                onClick={() => handleCategorySelect("와인", 3)}
                            >
                                와인
                            </div>
                            <div
                                onClick={() => handleCategorySelect("등산", 4)}
                            >
                                등산
                            </div>
                            <div
                                onClick={() => handleCategorySelect("야구", 5)}
                            >
                                야구
                            </div>
                            <div
                                onClick={() =>
                                    handleCategorySelect("배드민턴", 6)
                                }
                            >
                                배드민턴
                            </div>
                        </div>
                    )}
                    <div className="writePeopleselection">
                        <span>{maxParticipants}</span>
                        <div className="updownselection">
                            <button onClick={incrementPeopleCount}>
                                <div className="updownbox">
                                    <img src={UpW} alt="Up" />
                                </div>
                            </button>
                            <button onClick={decrementPeopleCount}>
                                <div className="updownbox">
                                    <img src={DownW} alt="Down" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="WriteMiddle">
                    <div className="writtingpage">
                        <input
                            type="text"
                            className="writtingtitle"
                            placeholder="제목을 입력해주세요"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <div className="divider"></div>
                        <textarea
                            className="writtingcontent"
                            placeholder="내용을 입력해주세요"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="WriteBottom">
                    <div className="SelectionPlace">
                        <div className="placeinput">
                            <div className="placeinputimg">
                                <img
                                    src={MapPin}
                                    className="placeinputimgsrc"
                                    alt="Map Pin"
                                />
                                <input
                                    type="text"
                                    className="inputplace"
                                    placeholder="장소를 입력해주세요"
                                    value={address}
                                    readOnly
                                />
                            </div>
                        </div>
                        <button
                            className="findplacebtn"
                            onClick={() => setIsAddressOpen(true)}
                        >
                            장소 검색
                        </button>
                    </div>
                    <div className="SelectionDate">
                        <div className="inputdateicon">
                            <div className="placeinputimg">
                                <img
                                    src={CalendarCheck}
                                    className="inputdateiconsrc"
                                    alt="Calendar Icon"
                                />
                                <input
                                    type="text"
                                    className="inputdate"
                                    placeholder="시간을 입력해주세요"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="submit-button"
                    onClick={handleSubmit}
                >
                    글 작성 완료하기
                </button>
                {isAddressOpen && (
                    <div
                        className="address-modal-overlay"
                        onClick={() => setIsAddressOpen(false)}
                    >
                        <div
                            className="address-modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsAddressOpen(false)}
                                className="close-button"
                            >
                                <img src={closeIcon} alt="Close" />
                            </button>
                            <DaumPostcode
                                onComplete={handleAddressComplete}
                                autoClose
                                style={{ width: "100%", height: "400px" }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PotWritenewModal;
