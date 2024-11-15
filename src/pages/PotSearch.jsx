import React, { useState, useEffect } from "react";
import axios from "axios";
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

// API URL 설정
const API_URL = `http://127.0.0.1:8000/pating/posts/`;
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNjg2MjUyLCJpYXQiOjE3MzE2ODI2NTIsImp0aSI6ImY3NmJlMTRkMzAwZDQyYWNhYTVmYWY3Yjk1YmE4MWQ1IiwidXNlcl9pZCI6MX0.ZpL24rAYTGYb47WnnzdAcCKgUj_eymOUQUcSfOZsIw8";
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
    console.log("Selected Category from state:", selectedCategory);

    const [categories, setCategories] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState("최신순");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [modalColor, setModalColor] = useState(null);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalInitialized, setIsModalInitialized] = useState(false);

    const colors = ["#8794c0", "#1C2135", "#E6E8ED", "#D7CCAF"];

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

    // 데이터 가져오기
    useEffect(() => {
        const fetchCategories = async () => {
            const accessToken = token;
            try {
                const response = await axios.get(API_URL, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                console.log("Full Data Received:", response.data); // 전체 데이터 확인

                // 선택한 카테고리 ID로 필터링
                const filteredData = response.data.filter(
                    (item) => String(item.category) === String(selectedCategory) // 문자열 비교
                );

                console.log("Filtered Data:", filteredData); // 필터링된 데이터 확인
                setCategories(filteredData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchCategories();
    }, [selectedCategory]);

    // 첫 로딩 시에만 모달을 열도록 설정
    useEffect(() => {
        if (location.state?.selectedPost && !isModalInitialized) {
            const foundPost = categories.find(
                (post) =>
                    post.title === location.state.selectedPost.title &&
                    post.id === location.state.selectedPost.id
            );
            if (foundPost) {
                setSelectedPost(foundPost); // 모달에 표시할 데이터 설정
                setModalColor("#8794c0"); // 기본 모달 배경색 (필요시 수정)
                setIsModalInitialized(true); // 첫 로딩 시 한 번만 실행
            }
        }
    }, [location.state, categories, isModalInitialized]);

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

    const closeModal = () => setSelectedPost(null);

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

    const handlePostSubmit = (newPost) => {
        // 새 글이 카테고리에 맞는지 확인하고 배열 맨 앞에 추가
        if (String(newPost.category) === String(selectedCategory)) {
            setCategories((prevCategories) => [newPost, ...prevCategories]); // 새 데이터 맨 앞에 추가
        }
    };

    return (
        <div className="Page">
            {selectedPost && (
                <Modal
                    backgroundColor={modalColor}
                    category={selectedPost}
                    onClose={() => setSelectedPost(null)}
                />
            )}
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

                        {/* 동적으로 변하는 추천 카테고리 */}
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
                            {isWriteModalOpen && (
                                <WriteModal
                                    onClose={closeWriteModal}
                                    onPostSubmit={handlePostSubmit} // 새 글 등록 시 처리
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PotSearch;
