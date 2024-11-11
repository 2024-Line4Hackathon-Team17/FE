import React from 'react';
import '../styles/section/loading/_loading.scss';
import logo from '../assets/images/Logo/POTing_Logo.png';

const Dots = ({ delayStart = 0 }) => (
    <div className="dots">
        <span style={{ animationDelay: `${delayStart}s` }}>.</span>
        <span style={{ animationDelay: `${delayStart + 0.3}s` }}>.</span>
        <span style={{ animationDelay: `${delayStart + 0.5}s` }}>.</span>
    </div>
);

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            {/* loading-text와 dots를 감싸는 컨테이너 */}
            <div className="text-and-dots">
                <Dots delayStart={0} /> {/* 첫 번째 dots */}
                <div className="loading-text">POTing</div>
                <Dots delayStart={0.3}/> {/* 엇박자 애니메이션을 위한 두 번째 dots */}
            </div>
            <div className="subtext">혼자보단 둘 이상<br />너만의 팟을 구해봐!</div>
        </div>
    );
};

export default Loading;
