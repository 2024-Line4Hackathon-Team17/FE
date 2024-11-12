import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "../styles/PotSearch.scss";
import "../styles/CommonStyle.scss";

// Modal
import Modal from "../components/PotModal.jsx";
import UserInfoModal from "../components/UserInfoModal.jsx";
import WriteModal from "../components/PotWritenewModal.jsx";
import PotList from "../components/PotList.jsx";

// img
import bell from "../assets/Bell.png";
import sample from "../assets/sample.jpg";
import WriteNew from "../assets/write.png";
import DownbtnB from "../assets/Downbtn.png";
import coffeeIcon from "../assets/coffee3d.png";

import wineIcon from "../assets/Wine.png";
import mountainIcon from "../assets/Mountains.png";
import baseballIcon from "../assets/Baseball.png";
import racquetIcon from "../assets/Racquet.png";
import Work from "../assets/Exercise.png";

// 6개의 카테고리 정보를 담은 상수
const PRESET_CATEGORIES = {
    coffee: {
        title: "분위기 좋은 카페 탐방",
        text1: "카페 투어와 함께",
        text2: "차 한 잔 어떠세요?",
        icon: coffeeIcon,
    },
    running: {
        title: "우리 동네 러닝크루",
        text1: "함께 러닝하실 분",
        text2: "지금 바로 모집 중!",
        icon: Work,
    },
    wine: {
        title: "와인에 대해 알고 싶은",
        text1: "와인에 대해",
        text2: "함께 알아봐요!",
        icon: wineIcon,
    },
    mountain: {
        title: "우리나라 산 정복하기",
        text1: "함께 산을",
        text2: "정복해 볼까요?",
        icon: mountainIcon,
    },
    baseball: {
        title: "요즘 유행 야구 직관",
        text1: "같이 야구 응원",
        text2: "가실 분 구합니다!",
        icon: baseballIcon,
    },
    racquet: {
        title: "배드민턴 같이 쳐요",
        text1: "근처 체육관에서",
        text2: "배드민턴 함께 쳐요!",
        icon: racquetIcon,
    },
};

const PotSearch = () => {
    const location = useLocation();
    const selectedPostData = location.state?.selectedPost || null;
    const selectedCategoryKey = location.state?.category?.category;

    const [selectedOrder, setSelectedOrder] = useState("최신순");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [modalColor, setModalColor] = useState(null);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalInitialized, setIsModalInitialized] = useState(false);

    const categoryData = PRESET_CATEGORIES[selectedCategoryKey] || {
        title: "운동",
        text1: "경기 직관, 러닝크루",
        text2: "나만의 운동 메이트를 찾을 수 있습니다",
        icon: Work,
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
        },

        {
            title: "흥국생명 직관 같이가요22",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹22",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니닿",
            icon: sample,
        },
        {
            title: "흥국생명 직관 같이가요22",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹22",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니닿",
            icon: sample,
        },
        {
            title: "흥국생명 직관 같이가요22",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹22",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니닿",
            icon: sample,
        },
        {
            title: "흥국생명 직관 같이가요22",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹22",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니닿",
            icon: sample,
        },
        {
            title: "흥국생명 직관 같이가요22",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹22",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니닿",
            icon: sample,
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

    const colors = ["#8794c0", "#1C2135", "#E6E8ED", "#D7CCAF"];

    // 첫 로딩 시에만 모달을 열도록 설정
    useEffect(() => {
        if (selectedPostData && !isModalInitialized) {
            const foundPost = categories.find(
                (post) =>
                    post.title === selectedPostData.title &&
                    post.id === selectedPostData.id
            );
            if (foundPost) {
                setSelectedPost(foundPost); // 모달에 표시할 정보 설정
                setModalColor("#8794c0"); // 원하는 색상 설정
                setIsModalInitialized(true); // 모달을 한 번만 열도록 설정
            }
        }
    }, [selectedPostData, categories, isModalInitialized]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOrderSelect = (order) => {
        setSelectedOrder(order);
        setIsDropdownOpen(false);
    };

    const openModal = (category, color) => {
        setSelectedPost(category);
        setModalColor(color);
    };

    const closeModal = () => {
        setSelectedPost(null); // 모달을 닫을 때 상태를 null로 설정하여 모달을 닫음
    };

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

                            {/* 동적으로 변하는 추천 카테고리 */}
                            <div className="Recommendpotbox">
                                <div className="Recommendpot">
                                    <div className="RecommendInfo">
                                        <div className="Recommendtitle">
                                            {categoryData.title}
                                        </div>
                                        <div className="Recommendtext">
                                            <div>{categoryData.text1}</div>
                                            <div>{categoryData.text2}</div>
                                        </div>
                                    </div>
                                    <div className="RecommendIcon">
                                        <img
                                            src={categoryData.icon}
                                            alt="Category Icon"
                                            className="workingicon"
                                        />
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
                                                    />
                                                </span>
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
                                {selectedPost && (
                                    <Modal
                                        backgroundColor={modalColor}
                                        category={selectedPost}
                                        onClose={closeModal}
                                        onIdClick={() =>
                                            openUserModal(selectedPost.id)
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
    );
};

export default PotSearch;
