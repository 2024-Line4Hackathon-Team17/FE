import React, { useState } from 'react';
import axios from 'axios';
import '../styles/section/login/_login.scss';
import logo from '../assets/images/Logo/POTing_Logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/user/login/`, {
        username,
        password,
      });
      
      // 로그인 성공 시 토큰과 user_id 처리
      // const { token, user_id } = response.data;
      console.log(response.data)
      console.log('Login successful:', response.data.token, response.data.user_id);

      // 로컬 스토리지에 토큰 저장 (예: 페이지 이동이나 인증을 위한 토큰 활용 가능)
      localStorage.setItem('token', response.data.access);

      navigate('/main');

      // 페이지 이동 또는 상태 업데이트
      // 예: navigate('/home') 혹은 setState를 통해 상태 업데이트
    } catch (error) {
      console.error('Login failed:', error);
      setError('로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.');
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-form">
        <input
          type="text"
          placeholder="아이디"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          로그인
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="signup-text">
        아직 계정이 없으신가요?
        <a href="/signup" className="signup-link">회원가입</a>
      </div>
    </div>
  );
};

export default Login;
