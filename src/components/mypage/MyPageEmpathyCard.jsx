import React, { useState } from 'react';
import { PiDotsThreeLight } from "react-icons/pi";
import axios from 'axios';

const MyPageEmpathyCard = ({ onDelete, post, userNickname, userProfileImage }) => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions((prev) => !prev);
    };

    const handleDelete = async () => {
        try {
            // const token = localStorage.getItem('token');
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNjk4MDU3LCJpYXQiOjE3MzE2OTQ0NTcsImp0aSI6IjlhMDFlMjIwNTUxNDQwODViYTdjZTk3MzQxZTZkZjA3IiwidXNlcl9pZCI6MX0.LPbTvCAvUwHyHxGil67WnDfvWoFFCzIafjIRY2tzaqw';

            await axios.delete(`${process.env.REACT_APP_API}/api/community/my/community-posts/${post.id}/`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            
            alert("팟팅이 성공적으로 삭제되었습니다.");
            if (onDelete) {
                onDelete(post.id);
            }
        } catch (error) {
            console.error('Failed to delete post:', error);
            alert("팟팅 삭제에 실패했습니다.");
        }
    };

    return (
        <div className='empathy_card_container'>
            <div className="empathy_card_inner_container">
                <div className="empathy_profile_area">
                    <div className="empathy_profile">
                        <img src={userProfileImage} alt="프로필" />
                    </div>
                </div>
                <div className="empathy_content_area mypage_empathy_content_area">
                    <div className="empathy_content mypage_empathy_content">
                        <div className="empathy_top">
                            <div className="empathy_top_nickname">
                                <span>{userNickname}</span>
                            </div>
                            <div className="empathy_top_list btn" onClick={() => toggleOptions(post.id)}>
                                <PiDotsThreeLight style={{width: '28px', height: '28px'}} />
                                {showOptions && (
                                    <ul className="empathy_top_list_options mypage_top_list_options">
                                        <li className='btn' onClick={handleDelete}>삭제하기</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="empathy_mid">
                            <div className="empathy_mid_title">
                                <span>{post.title}</span>
                            </div>
                            <div className="emapthy_mid_text">
                                <span>{post.content}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPageEmpathyCard