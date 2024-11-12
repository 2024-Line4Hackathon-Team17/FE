import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PotMainpageStyle.scss";
import "../styles/CommonStyle.scss"; // CommonStyle.scss 파일 import

import MovingCategory from "../components/CategoryMoving";
import bell from "../assets/Bell.png";
import CalendarCheck from "../assets/CalendarCheck.png";
import MapPin from "../assets/MapPinSimpleArea.png";
import sample from "../assets/sample.jpg";
import search from "../assets/search.png";

import Coffee from "../assets/Coffee.png";
import Mountain from "../assets/Mountains.png";
import Running from "../assets/PersonSimpleRun.png";

function PotMainpage() {
    const navigate = useNavigate();

    const categories = [
        {
            title: "흥국생명 직관 같이가요",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
            category: "running",
            id: "미야옹",
        },
        {
            title: "흥국생명 직관 같이가요22",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
            category: "running",
            id: "미야옹22",
        },
    ];

    const handleCategoryClick = (category) => {
        // title과 id를 함께 전달
        navigate("/search", {
            state: { selectedPost: { title: category.title, id: category.id } },
        });
    };

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
                                    <div className="Searchbar">
                                        <div className="searchBox">
                                            <input
                                                type="text"
                                                placeholder="찾으시는 팟팅을 검색해보세요."
                                                className="searchInput"
                                            />
                                            <button id="search-Btn">
                                                <img
                                                    src={search}
                                                    className="search-Img"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Animation">
                                <div className="AnimationTitle">
                                    카테고리별 팟팅
                                </div>
                                <div className="animationselection">
                                    <MovingCategory />
                                </div>
                            </div>
                            <div className="HotPot">
                                <div className="HotpotTitle">
                                    현재 떠오르는 팟팅
                                </div>
                                <div className="potList">
                                    {categories.map((category, index) => (
                                        <div className="listBox" key={index}>
                                            <div className="listBoxImg">
                                                <img
                                                    src={category.icon}
                                                    alt={category.title}
                                                    className="listboximg"
                                                />
                                            </div>
                                            <div
                                                className="listBoxInfo"
                                                onClick={() =>
                                                    handleCategoryClick(
                                                        category
                                                    )
                                                }
                                            >
                                                <div className="potListbox">
                                                    <div className="listBoxDetail">
                                                        <div className="DetailTitle">
                                                            {category.title}
                                                        </div>
                                                        <div className="DetailPlace">
                                                            <div className="Detailimg">
                                                                <img
                                                                    src={
                                                                        category.mapIcon
                                                                    }
                                                                    alt="Map Icon"
                                                                    className="detailimgsrc1"
                                                                />
                                                            </div>
                                                            {category.place}
                                                        </div>
                                                        <div className="DetailDate">
                                                            <div className="Detailimg">
                                                                <img
                                                                    src={
                                                                        category.calendarIcon
                                                                    }
                                                                    alt="Calendar Icon"
                                                                    className="detailimgsrc2"
                                                                />
                                                            </div>{" "}
                                                            {category.date}
                                                        </div>
                                                    </div>
                                                    <div className="listboxs">
                                                        <div className="listBoxLeft">
                                                            <div className="listBoxLeftbox">
                                                                <div className="potAttended">
                                                                    {
                                                                        category.attended
                                                                    }
                                                                </div>
                                                                <div>/</div>
                                                                <div className="potAvailable">
                                                                    {
                                                                        category.available
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PotMainpage;
