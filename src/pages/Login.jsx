import React from 'react';
import '../styles/section/login/_login.scss';
import logo from '../assets/images/Logo/POTing_Logo.png';

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-form">
        <input type="text" placeholder="아이디" className="input-field" />
        <input type="password" placeholder="비밀번호" className="input-field" />
        <button className="login-button">로그인</button>
      </div>
      <div className="signup-text">
        아직 계정이 없으신가요?
        <a href="/signup" className="signup-link">회원가입</a>
      </div>
    </div>
  );
};

export default Login;
