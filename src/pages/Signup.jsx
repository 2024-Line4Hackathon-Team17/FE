import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/section/signup/_signup.scss';

const Signup = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setIsPasswordMatch(e.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setIsPasswordMatch(password === e.target.value);
    };

    const handleNext = () => {
        if (isPasswordMatch) {
            navigate('/signup-step2'); // 비밀번호가 일치하면 /signup-step2로 이동
        }
    };

    return (
        <div className="signup-container">
            <h2>회원가입</h2>
            <div className="signup-form">
                <input type="text" placeholder="이름" className="input-field" />
                <input type="text" placeholder="아이디" className="input-field" />

                <div className="password-field">
                    <input
                        type="password"
                        placeholder="비밀번호"
                        className="input-field"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <button className="toggle-visibility">
                        <span role="img" aria-label="show-password">
                        </span>
                    </button>
                </div>

                <p className="password-instruction">영문, 숫자 조합의 8자 이상 20자 이하로 입력해주세요.</p>

                <div className="password-field">
                    <input
                        type="password"
                        placeholder="비밀번호 확인"
                        className="input-field"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    <button className="toggle-visibility">
                        <span role="img" aria-label="show-password">
                        </span>
                    </button>
                </div>

                {confirmPassword && (
                    <p className={isPasswordMatch ? "password-success" : "password-error"}>
                        {isPasswordMatch ? "비밀번호가 일치합니다." : "비밀번호가 일치하지 않습니다."}
                    </p>
                )}

                <button 
                    className="next-button" 
                    disabled={!isPasswordMatch}
                    onClick={handleNext} // "다음" 버튼 클릭 시 handleNext 호출
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default Signup;
