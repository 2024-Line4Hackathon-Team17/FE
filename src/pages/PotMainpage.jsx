import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/PotMainpageStyle.scss";
import "../styles/CommonStyle.scss"; // CommonStyle.scss 파일 import
import EmpathyHeader from "../components/empathy-community/EmpathyHeader";
import MovingCategory from "../components/CategoryMoving";
import bell from "../assets/Bell.png";
import CalendarCheck from "../assets/CalendarCheck.png";
import MapPin from "../assets/MapPinSimpleArea.png";
import sample from "../assets/iconimage.jpg";
import search from "../assets/search.png";

function PotMainpage() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]); // 데이터를 저장할 상태
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태

    // 데이터 가져오기
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); // 로딩 시작
            setError(null); // 기존 에러 초기화

            try {
                const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기
                if (!token) {
                    throw new Error("로그인이 필요합니다."); // 토큰이 없을 경우 에러 처리
                }

                const response = await axios.get(
                    `${process.env.REACT_APP_API}/pating/posts`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`, // 토큰을 Authorization 헤더에 포함
                        },
                    }
                );
                console.log("Fetched Data:", response.data);
                setCategories(response.data); // 데이터를 상태에 저장
            } catch (err) {
                console.error("Error fetching data:", err);
                setError(
                    err.message || "데이터를 불러오는 중 문제가 발생했습니다."
                ); // 에러 상태 업데이트
                if (err.response?.status === 401) {
                    // 토큰 만료 또는 인증 문제
                    alert("로그인이 만료되었습니다. 다시 로그인해주세요.");
                    navigate("/login"); // 로그인 페이지로 리디렉션
                }
            } finally {
                setIsLoading(false); // 로딩 종료
            }
        };

        fetchData();
    }, [navigate]);

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
                                    <EmpathyHeader />

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
                                                            {category.time}
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
