import React, { useState } from "react";
import "../styles/PotSearch.scss";
import "../styles/CommonStyle.scss";

// Modal
import Modal from "../components/PotModal.jsx";
import UserInfoModal from "../components/UserInfoModal.jsx";

//img
import bell from "../assets/Bell.png";
import CalendarCheck from "../assets/CalendarCheckW.png";
import MapPin from "../assets/MapPinSimpleAreaW.png";
import sample from "../assets/sample.jpg";
import Work from "../assets/Exercise.png";
import WriteNew from "../assets/write.png";

const PotSearch = () => {
    const [selectedOrder, setSelectedOrder] = useState("최신순");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [modalColor, setModalColor] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

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
            left: "2/3",
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
    const colors = ["#8794c0", "#a2b9bc", "#b2ad7f", "#a7d3a5"]; // 반복 색상

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
                                            <div
                                                className="findpotlistcategory"
                                                onClick={toggleDropdown}
                                            >
                                                {selectedOrder}
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
                                    <div className="scrollbar">
                                        <div className="potList">
                                            {categories.map(
                                                (category, index) => (
                                                    <div
                                                        className="listBox"
                                                        key={index}
                                                        style={{
                                                            top: `${
                                                                -index * 10
                                                            }px`,
                                                            backgroundColor:
                                                                colors[
                                                                    index %
                                                                        colors.length
                                                                ],
                                                            zIndex: index + 1,
                                                            position:
                                                                "relative",
                                                        }}
                                                        onClick={() =>
                                                            openModal(
                                                                category,
                                                                colors[
                                                                    index %
                                                                        colors.length
                                                                ]
                                                            )
                                                        }
                                                    >
                                                        <div className="potlistbox">
                                                            <div className="listboxtop">
                                                                <div className="listBoxImg">
                                                                    <img
                                                                        src={
                                                                            category.icon
                                                                        }
                                                                        alt={
                                                                            category.title
                                                                        }
                                                                        className="listboximg"
                                                                    />
                                                                </div>

                                                                <div className="DetailTitle">
                                                                    <div className="Id">
                                                                        {
                                                                            category.id
                                                                        }
                                                                    </div>
                                                                    <div className="PotTitle">
                                                                        {
                                                                            category.title
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="listBoxInfo">
                                                                <div className="potListbox">
                                                                    <div className="listBoxDetail">
                                                                        <div className="DetailPlace">
                                                                            <div className="Detailimg">
                                                                                <img
                                                                                    src={
                                                                                        category.mapIcon
                                                                                    }
                                                                                    alt="Map Icon"
                                                                                    className="detailimgsrc"
                                                                                />
                                                                            </div>
                                                                            {
                                                                                category.place
                                                                            }
                                                                        </div>
                                                                        <div className="DetailDate">
                                                                            <div className="Detailimg">
                                                                                <img
                                                                                    src={
                                                                                        category.calendarIcon
                                                                                    }
                                                                                    alt="Calendar Icon"
                                                                                    className="detailimgsrc"
                                                                                />
                                                                            </div>{" "}
                                                                            {
                                                                                category.date
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                    <div className="listBoxLeft">
                                                                        {
                                                                            category.left
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <div className="WriteNew">
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
