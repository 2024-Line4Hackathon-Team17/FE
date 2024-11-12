import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/section/signup/_signup_2.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

function Signup_2() {
    const [gender, setGender] = useState('');
    const [nickname, setNickname] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [address, setAddress] = useState('');
    const [nicknameError, setNicknameError] = useState(false);
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [isAgreed, setIsAgreed] = useState(false);
    
    const navigate = useNavigate(); // useNavigate 훅 사용

    const interests = [
        '운동', '뮤지컬', '수공예', '스터디',
        '그림', '뷰티', '코딩', '댄스',
        '맛집탐방', '스포츠 직관'
    ];

    const handleGenderClick = (gender) => {
        setGender(gender);
    };

    const handleInterestClick = (interest) => {
        setSelectedInterests(prev =>
            prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
        );
    };

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
        setNicknameError(e.target.value === '중복된닉네임');
    };

    const handleSubmit = () => {
        if (isAgreed) {
            alert('회원가입이 완료되었습니다.');
            navigate('/pot-mainpage'); // 회원가입 완료 시 /pot-mainpage로 이동
        } else {
            alert('이용약관에 동의해주세요.');
        }
    };

    return (
        <div className="signup-container">
            <h2>회원가입</h2>
            <div className="gender-selection">
                <button
                    className={`gender-button ${gender === '여성' ? 'active' : ''}`}
                    onClick={() => handleGenderClick('여성')}
                >
                    <FontAwesomeIcon icon={faVenus} className="gender-icon" /> 여성
                </button>
                <button
                    className={`gender-button ${gender === '남성' ? 'active' : ''}`}
                    onClick={() => handleGenderClick('남성')}
                >
                    <FontAwesomeIcon icon={faMars} className="gender-icon" /> 남성
                </button>
            </div>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="닉네임"
                    value={nickname}
                    onChange={handleNicknameChange}
                    className={nicknameError ? 'error' : ''}
                />
                {nicknameError && <span className="error-message">중복된 닉네임입니다. 사용할 수 있는 닉네임입니다.</span>}
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
                    {interests.map((interest, index) => (
                        <button
                            key={index}
                            className={`interest-button ${selectedInterests.includes(interest) ? 'selected' : ''}`}
                            onClick={() => handleInterestClick(interest)}
                        >
                            {interest}
                        </button>
                    ))}
                </div>
            </div>
            <div className="agreement">
                {/* 체크박스와 레이블을 연동하기 위해 id와 htmlFor 사용 */}
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
