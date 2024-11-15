import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/PotMainpageStyle.scss";
import "../styles/CommonStyle.scss"; // CommonStyle.scss 파일 import

import MovingCategory from "../components/CategoryMoving";
import bell from "../assets/Bell.png";
import CalendarCheck from "../assets/CalendarCheck.png";
import MapPin from "../assets/MapPinSimpleArea.png";
import sample from "../assets/sample.jpg";
import search from "../assets/search.png";

// API URL 설정
const API_URL = `http://127.0.0.1:8000/pating/posts/`;
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNjg2MjUyLCJpYXQiOjE3MzE2ODI2NTIsImp0aSI6ImY3NmJlMTRkMzAwZDQyYWNhYTVmYWY3Yjk1YmE4MWQ1IiwidXNlcl9pZCI6MX0.ZpL24rAYTGYb47WnnzdAcCKgUj_eymOUQUcSfOZsIw8"; // 실제 토큰 사용

function PotMainpage() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]); // 데이터를 저장할 상태

    // 데이터 가져오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("Fetched Data:", response.data); // 데이터 확인용 콘솔 출력
                setCategories(response.data); // 데이터를 상태에 저장
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleCategoryClick = (category) => {
        navigate("/search", {
            state: {
                category: String(category.category), // 카테고리 ID 전달
                selectedPost: {
                    title: category.title,
                    id: category.id,
                }, // 선택된 potList 정보 전달
            },
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
                                                    src={
                                                        category.icon || sample
                                                    } // 기본 이미지 설정
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
                                                                    src={MapPin}
                                                                    alt="Map Icon"
                                                                    className="detailimgsrc1"
                                                                />
                                                            </div>
                                                            {category.location}
                                                        </div>
                                                        <div className="DetailDate">
                                                            <div className="Detailimg">
                                                                <img
                                                                    src={
                                                                        CalendarCheck
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
                                                                        category.participants_count
                                                                    }
                                                                </div>
                                                                <div>/</div>
                                                                <div className="potAvailable">
                                                                    {
                                                                        category.max_participants
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
