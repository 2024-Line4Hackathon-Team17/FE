import React, { useEffect, useState } from "react";
import EmpathyHeader from "../../components/empathy-community/EmpathyHeader";
import default_profile from "../../assets/images/Logo/default_profile.png";
import { Link } from "react-router-dom";
import axios from "axios";

const MyPage = () => {
    const [userInfo, setUserInfo] = useState({
        user_id: "",
        username: "",
        gender: "",
        nickname: "",
        birth_date: "",
        address: "",
        interests: [],
        profile_picture: "",
    });

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const token = localStorage.getItem("token");
                console.log(token);

                const response = await axios.get(
                    `${process.env.REACT_APP_API}/mypage/profile/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log(response.data);
                setUserInfo(response.data);
            } catch (error) {
                console.error("Failed to fetch user info:", error);
            }
        };

        fetchUserInfo();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}.${month}.${day}`;
    };

    const interestsOptions = [
        { id: 1, name: "운동" },
        { id: 2, name: "뮤지컬" },
        { id: 3, name: "수공예" },
        { id: 4, name: "스터디" },
        { id: 5, name: "그림" },
        { id: 6, name: "뷰티" },
        { id: 7, name: "코딩" },
        { id: 8, name: "댄스" },
        { id: 9, name: "맛집탐방" },
        { id: 10, name: "스포츠 직관" },
    ];

    return (
        <div className="mypage_container container">
            <div className="mypage_inner_container">
                <EmpathyHeader />
                <main className="mypage_main_container">
                    <div className="mypage_main_back"></div>
                    <div className="mypage_main_content">
                        <div className="mypage_main_profile_area">
                            <div className="mypage_profile_header">
                                <p>{formatDate(userInfo.birth_date)}</p>
                                <p>{userInfo.address}</p>
                            </div>
                            <div className="mypage_profile_main">
                                <img
                                    src={
                                        userInfo.profile_picture ||
                                        default_profile
                                    }
                                    alt="기본 프로필"
                                />
                                <p className="mypage_profile_nickname">
                                    {userInfo.nickname}
                                </p>
                                <p className="mypage_profile_name">
                                    {userInfo.username}
                                </p>
                            </div>
                            <div className="mypage_profile_footer">
                                {userInfo.interests.map((interest, index) => (
                                    <div
                                        key={index}
                                        className="mypage_profile_keyword"
                                    >
                                        {interestsOptions[interest].name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mypage_main_list_area">
                            <ul className="mypage_main_list">
                                <Link to={"/mypage/poting"}>
                                    <li className="mypage_main_list_item btn">
                                        내가 만든 팟팅 모아보기
                                    </li>
                                </Link>
                                <Link to={"/mypage/empathy"}>
                                    <li className="mypage_main_list_item btn">
                                        내가 쓴 공감 글 모아보기
                                    </li>
                                </Link>
                                <Link to={"/mypage/poting/attend"}>
                                    <li className="mypage_main_list_item btn">
                                        팟팅 참여 내역
                                    </li>
                                </Link>
                                <Link to={"/mypage/update/info"}>
                                    <li className="mypage_main_list_item btn">
                                        정보 수정
                                    </li>
                                </Link>
                                <li className="mypage_main_list_item btn">
                                    로그아웃
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MyPage;
