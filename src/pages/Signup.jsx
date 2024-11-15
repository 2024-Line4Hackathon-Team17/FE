import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/section/signup/_signup.scss';

const Signup = () => {
const [userInfo, setUserInfo] = useState({
        name: '',
        username: '',
        password: '',
        password_confirmation: '',
        gender: '',
        nickname: '',
        birth_date: '',
        address: '',
        interests: [],
    });
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const navigate = useNavigate();

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
            const userInfo = {
                name,
                username,
                password,
                password_confirmation: confirmPassword,
            };
            navigate('/signup-step2', { state: { userInfo } }); // navigate로 userInfo 전달
        }
    };

    return (
        <div className="signup-container">
            <h2>회원가입</h2>
            <div className="signup-form">
                <input
                    type="text"
                    placeholder="이름"
                    className="input-field"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="아이디"
                    className="input-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div className="password-field">
                    <input
                        type="password"
                        placeholder="비밀번호"
                        className="input-field"
                        value={password}
                        onChange={handlePasswordChange}
                    />
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
                </div>
                {confirmPassword && (
                    <p className={isPasswordMatch ? "password-success" : "password-error"}>
                        {isPasswordMatch ? "비밀번호가 일치합니다." : "비밀번호가 일치하지 않습니다."}
                    </p>
                )}
                <button className="next-button" disabled={!isPasswordMatch} onClick={handleNext}>
                    다음
                </button>
            </div>
        </div>
    );
};

export default Signup;
