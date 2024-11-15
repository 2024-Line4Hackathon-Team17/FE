import React, { useState } from 'react';
import axios from 'axios';
import EmpathyHeader from '../../components/empathy-community/EmpathyHeader';
import MyPageHeader from '../../components/mypage/MyPageHeader';
import default_profile from '../../assets/images/Logo/default_profile.png';
import { BsCamera } from "react-icons/bs";

const MyPageInfo = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [nickname, setNickname] = useState('');
    const [isNicknameAvailable, setIsNicknameAvailable] = useState(null);
    const [selectedInterests, setSelectedInterests] = useState([]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setIsPasswordMatch(e.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setIsPasswordMatch(password === e.target.value);
    };

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
        setIsNicknameAvailable(null);
    };

    const handleConfirmNicknameCheck = () => {
        // 중복 확인 요청을 가정한 함수 (서버 요청 시 비동기 처리 필요)
        checkNicknameAvailability(nickname);
    };

    const checkNicknameAvailability = (nickname) => {
        if (nickname === '사용불가') {
            setIsNicknameAvailable(false);
        } else {
            setIsNicknameAvailable(true);
        }
    };

    const handleInterestClick = (interestId) => {
        setSelectedInterests((prev) =>
            prev.includes(interestId) ? prev.filter((id) => id !== interestId) : [...prev, interestId]
        );
    };

    const interestsOptions = [
        { id: 1, name: '운동' },
        { id: 2, name: '뮤지컬' },
        { id: 3, name: '수공예' },
        { id: 4, name: '스터디' },
        { id: 5, name: '그림' },
        { id: 6, name: '뷰티' },
        { id: 7, name: '코딩' },
        { id: 8, name: '댄스' },
        { id: 9, name: '맛집탐방' },
        { id: 10, name: '스포츠 직관' },
    ];

    const handleSave = async () => {
        try {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNjk4MDU3LCJpYXQiOjE3MzE2OTQ0NTcsImp0aSI6IjlhMDFlMjIwNTUxNDQwODViYTdjZTk3MzQxZTZkZjA3IiwidXNlcl9pZCI6MX0.LPbTvCAvUwHyHxGil67WnDfvWoFFCzIafjIRY2tzaqw';
            const response = await axios.post(`${process.env.REACT_APP_API}/api/mypage/update_profile/`, {
                profile_picture: profileImage || default_profile,
                nickname,
                password,
                password_confirmation: confirmPassword,
                interests: selectedInterests,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`, // Include token in the Authorization header
                },
            },);
            console.log('Profile updated:', response.data);
            alert('프로필이 성공적으로 업데이트되었습니다.');
        } catch (error) {
            console.error('Failed to update profile:', error);
            alert('프로필 업데이트 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className='mypage_info_container container'>
            <div className="mypage_info_inner_container">
                <EmpathyHeader />
                <MyPageHeader title={'정보 수정'} />
                <main className="mypage_info_container">
                    <div className="mypage_info_profile">
                        {profileImage ? (
                            <img src={profileImage} alt="프로필 미리보기" className="profile-image" />
                        ) : (
                            <img src={default_profile} alt="기본 프로필" className="profile-image" />
                        )}
                        <label htmlFor="profileImageInput" className="upload_icon btn">
                            <BsCamera className='upload_icon_camera' />
                        </label>
                        <input
                            type="file"
                            id="profileImageInput"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                    </div>
                    <div className="mypage_info_nickname_pw">
                        <div className="mypage_info_nickname">
                            <input type="text" placeholder="닉네임" className="input-field"
                                value={nickname}
                                onChange={handleNicknameChange}
                            />
                            <button className='btn' onClick={handleConfirmNicknameCheck}>중복 확인</button>
                        </div>
                        {isNicknameAvailable !== null && (
                            <p className={isNicknameAvailable ? "password-success" : "password-error"}>
                                {isNicknameAvailable ? "사용할 수 있는 닉네임입니다." : "중복된 닉네임입니다."}
                            </p>
                        )}
                        <div className="mypage_info_pw">
                            <input
                                type="password"
                                placeholder="비밀번호"
                                className="input-field"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <p className="password-instruction">영문, 숫자 조합의 8자 이상 20자 이하로 입력해주세요.</p>
                        <div className="mypage_info_check_pw">
                            <input
                                type="password"
                                placeholder="비밀번호 확인"
                                className="input-field"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
                        </div>
                        {confirmPassword && (
                            <p className={isPasswordMatch ? "password-success" : "password-error"}>
                                {isPasswordMatch ? "비밀번호가 일치합니다." : "비밀번호가 일치하지 않습니다."}
                            </p>
                        )}
                    </div>
                    <div className="mypage_info_interest">
                        <p>관심사를 설정해주세요</p>
                        <div className="interests-buttons">
                            {interestsOptions.map((interest, index) => (
                                <button
                                    key={index}
                                    className={`interest-button btn ${selectedInterests.includes(interest.id) ? 'selected' : ''}`}
                                    onClick={() => handleInterestClick(interest.id)}
                                >
                                    {interest.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mypage_info_save">
                        <div className="mypage_info_save_btn btn" onClick={handleSave}>
                            <span>저장하기</span>
                        </div>
                    </div>
                </main>
                <div className='main_blank'></div>
            </div>
        </div>
    )
}

export default MyPageInfo