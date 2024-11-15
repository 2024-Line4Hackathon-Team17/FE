import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/section/signup/_signup_2.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

function Signup_2() {
    const [gender, setGender] = useState('');
    const [nickname, setNickname] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [address, setAddress] = useState('');
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [isAgreed, setIsAgreed] = useState(false);
    const location = useLocation();

    const userInfo = location.state?.userInfo || {
        name: '',
        username: '',
        password: '',
        password_confirmation: '',
    };

    const navigate = useNavigate();

    // 관심사 목록에 ID 수동 부여
    const interests = [
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

    const handleInterestClick = (interestId) => {
        setSelectedInterests((prev) =>
            prev.includes(interestId) ? prev.filter((id) => id !== interestId) : [...prev, interestId]
        );
    };

    const handleSubmit = async () => {
        if (!isAgreed) {
            alert('이용약관에 동의해주세요.');
            return;
        }

        const userData = {
            ...userInfo,
            gender,
            nickname,
            birth_date: birthDate,
            address,
            interests: selectedInterests, // 선택된 관심사 ID 배열
        };

        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/user/register/`, userData);
            alert('회원가입이 완료되었습니다.');
            navigate('/pot-mainpage');
        } catch (error) {
            console.error('회원가입 실패:', error.response?.data || error.message);
            alert('회원가입에 실패했습니다.');
        }
    };

    return (
        <div className="signup-container">
            <h2>회원가입</h2>
            <div className="gender-selection">
                <button
                    className={`gender-button ${gender === 'female' ? 'active' : ''}`}
                    onClick={() => setGender('female')}
                >
                    <FontAwesomeIcon icon={faVenus} className="gender-icon" /> 여성
                </button>
                <button
                    className={`gender-button ${gender === 'male' ? 'active' : ''}`}
                    onClick={() => setGender('male')}
                >
                    <FontAwesomeIcon icon={faMars} className="gender-icon" /> 남성
                </button>
            </div>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="닉네임"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
            </div>
            <div className="input-group">
                <input type="date" placeholder="생년월일" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
            </div>
            <div className="input-group">
                <input type="text" placeholder="주소" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="interests">
                <p>관심사를 설정해주세요</p>
                <div className="interests-buttons">
                    {interests.map((interest) => (
                        <button
                            key={interest.id}
                            className={`interest-button ${selectedInterests.includes(interest.id) ? 'selected' : ''}`}
                            onClick={() => handleInterestClick(interest.id)}
                        >
                            {interest.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="agreement">
                <input
                    type="checkbox"
                    id="terms-checkbox"
                    checked={isAgreed}
                    onChange={() => setIsAgreed(!isAgreed)}
                />
                <label htmlFor="terms-checkbox">이용약관 및 개인정보 처리방침에 동의합니다.</label>
            </div>
            <button className="signup-button" onClick={handleSubmit}>회원가입</button>
        </div>
    );
}

export default Signup_2;
