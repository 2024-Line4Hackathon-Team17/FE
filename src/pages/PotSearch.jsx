import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../styles/PotSearch.scss";
import "../styles/CommonStyle.scss";

import Modal from "../components/PotModal.jsx";
import WriteModal from "../components/PotWritenewModal.jsx";
import PotList from "../components/PotList.jsx";

import bell from "../assets/Bell.png";
import WriteNew from "../assets/write.png";
import DownbtnB from "../assets/Downbtn.png";
import coffeeIcon from "../assets/coffee3d.png";
import wineIcon from "../assets/Wine.png";
import mountainIcon from "../assets/Mountains.png";
import baseballIcon from "../assets/Baseball.png";
import racquetIcon from "../assets/Racquet.png";
import Work from "../assets/Exercise.png";
/*
// API URL 설정
const API_URL = `http://127.0.0.1:8000/api/pating/posts/`;
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNzAxNzc4LCJpYXQiOjE3MzE2OTgxNzgsImp0aSI6Ijc0MjgyNmI1NzliYjRjNmQ4NDBiYTg1NGI1ZWIxZjlkIiwidXNlcl9pZCI6MX0.hMVlIyIQ-7BeagMY8L-_rq8e-85PBOQXqlQNEj7ozkM";
*/
// 카테고리 정보 설정
const PRESET_CATEGORIES = {
    2: {
        title: "분위기 좋은 카페 탐방",
        text1: "카페 투어와 함께",
        text2: "차 한 잔 어떠세요?",
        icon: coffeeIcon,
    },
    1: {
        title: "우리 동네 러닝크루",
        text1: "함께 러닝하실 분",
        text2: "지금 바로 모집 중!",
        icon: Work,
    },
    3: {
        title: "와인에 대해 알고 싶은",
        text1: "와인에 대해",
        text2: "함께 알아봐요!",
        icon: wineIcon,
    },
    4: {
        title: "우리나라 산 정복하기",
        text1: "함께 산을",
        text2: "정복해 볼까요?",
        icon: mountainIcon,
    },
    5: {
        title: "요즘 유행 야구 직관",
        text1: "같이 야구 응원",
        text2: "가실 분 구합니다!",
        icon: baseballIcon,
    },
    6: {
        title: "배드민턴 같이 쳐요",
        text1: "근처 체육관에서",
        text2: "배드민턴 함께 쳐요!",
        icon: racquetIcon,
    },
};

const PotSearch = () => {
    const location = useLocation();
    const selectedCategory = location.state?.category;
    const selectedCategoryData = PRESET_CATEGORIES[selectedCategory] || {
        title: "운동",
        text1: "경기 직관, 러닝크루",
        text2: "나만의 운동 메이트를 찾을 수 있습니다",
        icon: Work,
    };

    const [categories, setCategories] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState("최신순");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [modalColor, setModalColor] = useState(null);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
    const [fontColor, setFontColor] = useState("#FFFFFF");

    const colors = ["#8794c0", "#1C2135", "#E6E8ED", "#D7CCAF"];

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const token = localStorage.getItem("token"); // 토큰 가져오기
                const response = await axios.get(
                    "http://3.34.247.39/api/pating/posts/",
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                const filteredData = response.data.filter(
                    (item) => String(item.category) === String(selectedCategory)
                );
                console.log("Fetched Data:", response.data);
                setCategories(filteredData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchCategories();
    }, [selectedCategory]);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleOrderSelect = (order) => {
        setSelectedOrder(order);
        setIsDropdownOpen(false);
    };

    const openModal = (category, color, fontColor) => {
        setSelectedPost(category);
        setModalColor(color);
        setFontColor(fontColor);
    };

    const closeModal = () => setSelectedPost(null);

    const openWriteModal = () => setIsWriteModalOpen(true);
    const closeWriteModal = () => setIsWriteModalOpen(false);

    const handlePostSubmit = (newPost) => {
        if (String(newPost.category) === String(selectedCategory)) {
            setCategories((prevCategories) => [newPost, ...prevCategories]);
        }
    };

    return (
        <div className="Page">
            <div className="Center">
                <div className="PageSpace">
                    <div className="PotMainpageStyle">
                        <div className="Search">
                            <div className="TopSelection">
                                <div className="Alarmbox">
                                    <div className="Alarm">
                                        <img src={bell} className="alarmimg" />
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
                                        {selectedCategoryData.title}
                                    </div>
                                    <div className="Recommendtext">
                                        <div>{selectedCategoryData.text1}</div>
                                        <div>{selectedCategoryData.text2}</div>
                                    </div>
                                </div>
                                <div className="RecommendIcon">
                                    <img
                                        src={selectedCategoryData.icon}
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
                                    <div
                                        className="findpotlistcategory"
                                        onClick={toggleDropdown}
                                    >
                                        {selectedOrder}
                                        <span
                                            className={`dropdown-arrow ${
                                                isDropdownOpen ? "open" : ""
                                            }`}
                                        >
                                            <img
                                                src={DownbtnB}
                                                className="downbtnb"
                                            />
                                        </span>
                                        <div
                                            className={`dropdown ${
                                                isDropdownOpen ? "open" : ""
                                            }`}
                                        >
                                            <div
                                                onClick={() =>
                                                    handleOrderSelect("최신순")
                                                }
                                            >
                                                최신순
                                            </div>
                                            <div
                                                onClick={() =>
                                                    handleOrderSelect("인기순")
                                                }
                                            >
                                                인기순
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
                        </div>
                    </div>
                </div>
                {isWriteModalOpen && (
                    <WriteModal
                        onClose={closeWriteModal}
                        onPostSubmit={handlePostSubmit}
                    />
                )}
            </div>
            {selectedPost && (
                <Modal
                    backgroundColor={modalColor}
                    category={selectedPost}
                    onClose={closeModal}
                    fontColor={fontColor}
                />
            )}
        </div>
    );
};

export default PotSearch;
