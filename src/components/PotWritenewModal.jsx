// src/components/WriteModal.jsx
import React, { useState } from "react";
import "../styles/PotWritenewModal.scss";

import closeIcon from "../assets/modalclose.png";
import CalendarCheck from "../assets/CalendarCheckY.png";
import MapPin from "../assets/MapPinSimpleAreaY.png";
import UpW from "../assets/UpW.png";
import DownW from "../assets/DownW.png";

import DaumPostcode from "react-daum-postcode"; // 주소 검색 API

const PotWritenewModal = ({ onClose }) => {
    const [category, setCategory] = useState("카테고리 선택");
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [peopleCount, setPeopleCount] = useState(2);
    const [isAddressOpen, setIsAddressOpen] = useState(false);
    const [address, setAddress] = useState("");

    const handleCategorySelect = (selectedCategory) => {
        setCategory(selectedCategory);
        setIsCategoryOpen(false);
    };

    const incrementPeopleCount = () => setPeopleCount((prev) => prev + 1);
    const decrementPeopleCount = () =>
        setPeopleCount((prev) => (prev > 1 ? prev - 1 : prev));

    const handleAddressComplete = (data) => {
        setAddress(data.address);
        setIsAddressOpen(false);
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
                            <div onClick={() => handleCategorySelect("운동")}>
                                운동
                            </div>
                            <div onClick={() => handleCategorySelect("스터디")}>
                                스터디
                            </div>
                            <div onClick={() => handleCategorySelect("취미")}>
                                취미
                            </div>
                        </div>
                    )}
                    <div className="writePeopleselection">
                        <span>{peopleCount}</span>
                        <div className="updownselection">
                            <button onClick={decrementPeopleCount}>
                                <img src={DownW}></img>
                            </button>
                            <button onClick={incrementPeopleCount}>
                                <img src={UpW}></img>
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
                        />
                        <textarea
                            className="writtingcontent"
                            placeholder="내용을 입력해주세요"
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
                                ></img>
                            </div>
                            <input
                                type="text"
                                className="inputplace"
                                placeholder="장소를 입력해주세요"
                                value={address}
                                readOnly
                            />
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
                            <img
                                src={CalendarCheck}
                                className="inputdateiconsrc"
                            ></img>
                        </div>
                        <input
                            type="text"
                            className="inputdate"
                            placeholder="시간을 입력해주세요"
                        />
                    </div>
                </div>

                <button type="submit" className="submit-button">
                    글 작성 완료하기
                </button>

                {isAddressOpen && (
                    <DaumPostcode
                        onComplete={handleAddressComplete}
                        autoClose
                        style={{ width: "100%", height: "400px" }}
                    />
                )}
            </div>
        </div>
    );
};

export default PotWritenewModal;
