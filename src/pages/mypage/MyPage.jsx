import React, { useEffect, useState } from 'react';
import EmpathyHeader from '../../components/empathy-community/EmpathyHeader';
import default_profile from '../../assets/images/Logo/default_profile.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyPage = () => {
    const [userInfo, setUserInfo] = useState({
        user_id: '',
        username: '',
        gender: '',
        nickname: '',
        birth_date: '',
        address: '',
        interests: [],
        profile_picture: ''
    });

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const token = localStorage.getItem('token');
                
                const response = await axios.get(`${process.env.REACT_APP_API}/api/mypage/profile/`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserInfo(response.data);
            } catch (error) {
                console.error("Failed to fetch user info:", error);
            }
        };

        fetchUserInfo();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    return (
        <div className='mypage_container container'>
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
                                <img src={userInfo.profile_picture || default_profile} alt="기본 프로필" />
                                <p className='mypage_profile_nickname'>{userInfo.nickname}</p>
                                <p className='mypage_profile_name'>{userInfo.username}</p>
                            </div>
                            <div className="mypage_profile_footer">
                                {userInfo.interests.map((interest, index) => (
                                    <div key={index} className="mypage_profile_keyword">{interest}</div>
                                ))}
                            </div>
                        </div>
                        <div className="mypage_main_list_area">
                            <ul className="mypage_main_list">
                                <Link to={'/mypage/poting'}>
                                    <li className="mypage_main_list_item btn">내가 만든 팟팅 모아보기</li>
                                </Link>
                                <Link to={'/mypage/empathy'}>
                                    <li className="mypage_main_list_item btn">내가 쓴 공감 글 모아보기</li>
                                </Link>
                                <Link to={'/mypage/poting/attend'}>
                                    <li className="mypage_main_list_item btn">팟팅 참여 내역</li>
                                </Link>
                                <Link to={'/mypage/update/info'}>
                                    <li className="mypage_main_list_item btn">정보 수정</li>
                                </Link>
                                <li className="mypage_main_list_item btn">로그아웃</li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default MyPage