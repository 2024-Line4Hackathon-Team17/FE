import React, { useEffect, useState } from 'react';
import MyPageHeader from '../../components/mypage/MyPageHeader';
import EmpathyHeader from '../../components/empathy-community/EmpathyHeader';
import MyPageEmpathyCard from '../../components/mypage/MyPageEmpathyCard';
import axios from 'axios';
import default_profile from '../../assets/images/Logo/default_profile.png';

const MyPageEmpathy = () => {
    const [empathyPosts, setEmpathyPosts] = useState([]);
    const [userInfo, setUserInfo] = useState({ nickname: '', profile_picture: '' });

    useEffect(() => {
        const fetchEmpathyPosts = async () => {
            try {
                // const token = localStorage.getItem('token');
                const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNjk4MDU3LCJpYXQiOjE3MzE2OTQ0NTcsImp0aSI6IjlhMDFlMjIwNTUxNDQwODViYTdjZTk3MzQxZTZkZjA3IiwidXNlcl9pZCI6MX0.LPbTvCAvUwHyHxGil67WnDfvWoFFCzIafjIRY2tzaqw';

                const response = await axios.get(`${process.env.REACT_APP_API}/api/community/my/community-posts/`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include token in the Authorization header
                    },
                });
                setEmpathyPosts(response.data);

                const userResponse = await axios.get(`${process.env.REACT_APP_API}/api/mypage/profile/`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include token in the Authorization header
                      },
                });
                const profilePicture = userResponse.data.profile_picture || default_profile;
                setUserInfo({
                    nickname: userResponse.data.nickname,
                    profile_picture: profilePicture,
                });
            } catch (error) {
                console.error("Failed to fetch empathy posts:", error);
            }
        };

        fetchEmpathyPosts();
    }, []);

    const handleDelete = (postId) => {
        setEmpathyPosts((prevPosts) => prevPosts.filter(post => post.id !== postId));
    };

    return (
        <div className='mypage_empathy_container container'>
            <div className="mypage_empathy_inner_container">
                <EmpathyHeader />
                <MyPageHeader title={'내가 쓴 공감 글 모아보기'} />
                <main className="mypage_empathy_main_container">
                    <div className="mypage_empathy_back"></div>
                    <div className="mypage_empathy_area">
                        {empathyPosts.map((post) => (
                            <MyPageEmpathyCard
                                key={post.id}
                                post={post}
                                userNickname={userInfo.nickname}
                                userProfileImage={userInfo.profile_picture}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                </main>
                <div className='main_blank'></div>
            </div>
        </div>
    )
}

export default MyPageEmpathy