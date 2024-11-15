import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/section/signup/_signup.scss';

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        username: '',
        password: '',
        password_confirmation: '', // password_confirmation 필드 추가
    });
    const [id, setId] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);

    const navigate = useNavigate();

    // input 값 변경 시 userInfo 상태 업데이트
    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
            ...(name === 'id' && { username: value }), // id 변경 시 username도 업데이트
        }));

        if (name === 'password' || name === 'password_confirmation') {
            setIsPasswordMatch(userInfo.password === value || userInfo.password_confirmation === value);
        }
    };

    const handleIdChange = (e) => {
        const value = e.target.value;
        setId(value);

        setUserInfo((prevInfo) => ({
            ...prevInfo,
            username: value, // id 값을 username으로 설정
        }));
    };

    // 다음 단계로 이동
    const handleNext = () => {
        if (isPasswordMatch) {
            navigate('/signup-step2', { state: { userInfo } });
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    };

    return (
        <div className="signup-container">
            <h2>회원가입</h2>
            <div className="signup-form">
                <input
                    type="text"
                    name="name"
                    placeholder="이름"
                    className="input-field"
                    value={userInfo.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="id"
                    placeholder="아이디"
                    className="input-field"
                    value={id}
                    onChange={handleIdChange}
                />
                <div className="password-field">
                    <input
                        type="password"
                        name="password"
                        placeholder="비밀번호"
                        className="input-field"
                        value={userInfo.password}
                        onChange={handleChange}
                    />
                </div>
                <p className="password-instruction">영문, 숫자 조합의 8자 이상 20자 이하로 입력해주세요.</p>
                <div className="password-field">
                    <input
                        type="password"
                        name="password_confirmation" // password_confirmation 필드 추가
                        placeholder="비밀번호 확인"
                        className="input-field"
                        value={userInfo.password_confirmation} // userInfo의 password_confirmation 값 사용
                        onChange={handleChange} // handleChange로 상태 업데이트
                    />
                </div>
                {userInfo.password_confirmation && (
                    <p className={isPasswordMatch ? 'password-success' : 'password-error'}>
                        {isPasswordMatch ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
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
