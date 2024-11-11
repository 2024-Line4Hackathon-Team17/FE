import React, { useState } from "react";
import "../styles/PotSearch.scss";
import "../styles/CommonStyle.scss";

// Modal
import Modal from "../components/PotModal.jsx";
import UserInfoModal from "../components/UserInfoModal.jsx";
import WriteModal from "../components/PotWritenewModal.jsx";
import PotList from "../components/PotList.jsx";

//img
import bell from "../assets/Bell.png";
import CalendarCheck from "../assets/CalendarCheckW.png";
import MapPin from "../assets/MapPinSimpleAreaW.png";
import sample from "../assets/sample.jpg";
import Work from "../assets/Exercise.png";
import WriteNew from "../assets/write.png";
import DownbtnB from "../assets/Downbtn.png";

const PotSearch = () => {
    const [selectedOrder, setSelectedOrder] = useState("최신순");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [modalColor, setModalColor] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOrderSelect = (order) => {
        setSelectedOrder(order);
        setIsDropdownOpen(false);
    };

    const categories = [
        {
            title: "흥국생명 직관 같이가요",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니닿",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
        },
        {
            title: "흥국생명 직관 같이가요",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니닿",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
        },
        {
            title: "흥국생명 직관 같이가요",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니닿",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
        },
        {
            title: "흥국생명 직관 같이가요",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니닿",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
        },
    ];

    const idinfo = [
        {
            id: "미야옹",
            age: "23",
            where: "서울",
            gender: "female",
            name: "고영희",
            img: sample,
            choice: "운동, 스터디, 그림",
        },
    ];
    const colors = ["#8794c0", "#1C2135", "#E6E8ED", "#D7CCAF"]; // 반복 색상

    const openModal = (category, color) => {
        setSelectedCategory(category);
        setModalColor(color);
    };

    const closeModal = () => setSelectedCategory(null);

    const openUserModal = (id) => {
        const userInfo = idinfo.find((user) => user.id === id);
        if (userInfo) {
            setSelectedUser(userInfo);
            closeModal();
        }
    };

    const closeUserModal = () => setSelectedUser(null);

    const openWriteModal = () => setIsWriteModalOpen(true);
    const closeWriteModal = () => setIsWriteModalOpen(false);

    return (
        <div>
            <div className="Page">
                <div className="Center">
                    <div className="PageSpace">
                        <div
                            className={`PageSpace ${
                                selectedCategory ? "modal-background" : ""
                            }`}
                        >
                            <div className="PotMainpageStyle">
                                <div className="Search">
                                    <div className="TopSelection">
                                        <div className="Alarmbox">
                                            <div className="Alarm">
                                                <img
                                                    src={bell}
                                                    className="alarmimg"
                                                />
                                            </div>
                                        </div>
                                        <div className="RecommendText">
                                            <div>4호선님,</div>
                                            오늘도 팟팅하세요!
                                        </div>
                                    </div>
                                </div>
                                <div className="Recommendpotbox">
                                    <div className="Recommendpot">
                                        <div className="RecommendInfo">
                                            <div className="Recommendtitle">
                                                운동
                                            </div>
                                            <div className="Recommendtext">
                                                <div>경기 직관, 러닝크루</div>
                                                <div>
                                                    나만의 운동 메이트를 찾을 수
                                                    있습니다
                                                </div>
                                            </div>
                                        </div>
                                        <div className="RecommendIcon">
                                            <img
                                                src={Work}
                                                className="workingicon"
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="FindPotListbox">
                                    <div className="FindPotList">
                                        <div className="findpotlist">
                                            나에게 맞는 팟팅을 찾아보세요
                                        </div>
                                        <div className="findpotlistcategorybox">
                                            <div className="findpotlistcategorybox">
                                                <div
                                                    className="findpotlistcategory"
                                                    onClick={toggleDropdown}
                                                >
                                                    {selectedOrder}
                                                    <span
                                                        className={`dropdown-arrow ${
                                                            isDropdownOpen
                                                                ? "open"
                                                                : ""
                                                        }`}
                                                    >
                                                        <img
                                                            src={DownbtnB}
                                                            className="downbtnb"
                                                        ></img>
                                                    </span>{" "}
                                                    {/* 화살표 추가 */}
                                                    <div
                                                        className={`dropdown ${
                                                            isDropdownOpen
                                                                ? "open"
                                                                : ""
                                                        }`}
                                                    >
                                                        <div
                                                            onClick={() =>
                                                                handleOrderSelect(
                                                                    "최신순"
                                                                )
                                                            }
                                                        >
                                                            최신순
                                                        </div>
                                                        <div
                                                            onClick={() =>
                                                                handleOrderSelect(
                                                                    "인기순"
                                                                )
                                                            }
                                                        >
                                                            인기순
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="scrollbar">
                                        <PotList
                                            categories={categories}
                                            colors={colors}
                                            openModal={openModal}
                                        />
                                        <div
                                            className="WriteNew"
                                            onClick={openWriteModal}
                                        >
                                            <img
                                                src={WriteNew}
                                                alt="Write New"
                                                className="writeIcon"
                                            />
                                        </div>
                                    </div>
                                    {selectedCategory && (
                                        <Modal
                                            backgroundColor={modalColor}
                                            category={selectedCategory}
                                            onClose={closeModal}
                                            onIdClick={() =>
                                                openUserModal(
                                                    selectedCategory.id
                                                )
                                            }
                                        />
                                    )}
                                    {selectedUser && (
                                        <UserInfoModal
                                            userInfo={selectedUser}
                                            onClose={closeUserModal}
                                        />
                                    )}
                                    {isWriteModalOpen && (
                                        <WriteModal onClose={closeWriteModal} />
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

export default PotSearch;
