import React, { useState, useEffect } from "react";
import axios from "axios";
import EmpathyCard from "../components/empathy-community/EmpathyCard";
import EmpathyHeader from "../components/empathy-community/EmpathyHeader";
import EmpathyWriteBtn from "../components/empathy-community/EmpathyWriteBtn";
import EmpathyWritePopup from "../components/empathy-community/EmpathyWritePopup";

const EmpathyCommunityPage = () => {
    const [posts, setPosts] = useState([]); // 게시글 데이터 상태
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // 팝업 열기/닫기
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    // 데이터 가져오기
    const fetchPosts = async () => {
        try {
            const token = localStorage.getItem("token"); // 동적으로 토큰 가져오기
            const response = await axios.get(
                `${process.env.REACT_APP_API}/community/posts/`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setPosts(response.data); // 응답 데이터 상태에 저장
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const handleNewPost = (newPost) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]); // 새로운 게시글을 목록에 추가
    };

    // 컴포넌트 마운트 시 데이터 가져오기
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="empathy_community_container container">
            <EmpathyHeader />
            <div className="empathy_title_container">
                <div className="empathy_title_inner_container">
                    <p>OO님,</p>
                    <p>오늘 하루는 어떠셨나요?</p>
                    <p>팟들에게 위로를 받아보세요 :)</p>
                </div>
            </div>
            <div className="empathy_subtitle_container">
                <div className="empathy_subtitle_inner_container">
                    <div className="empathy_subtitle">
                        <span>팟들과 오늘 일상을 공유해보세요.</span>
                    </div>
                    <div className="empathy_sort">
                        <select
                            name="empathy_sort_selec"
                            id="empathy_sort_selec"
                            className="btn"
                        >
                            <option value="latest">최신순</option>
                            <option value="popular">인기순</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="empathy_card_list">
                {/* 게시글 데이터 기반 EmpathyCard 렌더링 */}
                {posts.map((post, index) => (
                    <EmpathyCard key={post.id} post={post} index={index} />
                ))}
            </div>
            <div className="main_blank"></div>
            <EmpathyWriteBtn onClick={togglePopup} />
            {isPopupOpen && (
                <EmpathyWritePopup
                    onClose={togglePopup}
                    onPostSubmit={handleNewPost}
                />
            )}
        </div>
    );
};

export default EmpathyCommunityPage;
