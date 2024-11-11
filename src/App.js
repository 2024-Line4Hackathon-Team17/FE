import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PotMainpage from "./pages/PotMainpage";
import EmpathyCommunityPage from './pages/EmpathyCommunityPage';
import LiveChatListPage from './pages/live-chat/LiveChatListPage';
import LiveChatPage from './pages/live-chat/LiveChatPage';
import MyPage from './pages/mypage/MyPage';
import MyPageEmpathy from './pages/mypage/MyPageEmpathy';
import MyPageInfo from './pages/mypage/MyPageInfo';
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // Signup 컴포넌트 임포트
import Signup_2 from "./pages/Signup_2";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // 로딩 상태를 2초 후에 false로 설정 (예시)
        const timer = setTimeout(() => setIsLoading(false), 2000);
        
        // 컴포넌트 언마운트 시 타이머 정리
        return () => clearTimeout(timer);
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true); // 로그인 성공 시 상태 업데이트
    };

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route>
                        <Route exact path="/" element={<PotMainpage />} />
                        <Route exact path="/empathy" element={<EmpathyCommunityPage />} />
                        <Route exact path="/livechat" element={<LiveChatListPage />} />
                        <Route exact path="/livechat/id" element={<LiveChatPage />} />
                        <Route exact path="/mypage" element={<MyPage />} />
                        <Route exact path="/mypage/empathy" element={<MyPageEmpathy />} />
                        <Route exact path="/mypage/update/info" element={<MyPageInfo />} />
                    </Route>
                    {isLoading ? (
                        // 로딩 중일 때는 Loading 컴포넌트만 표시
                        <Route path="/" element={<Loading />} />
                    ) : isLoggedIn ? (
                        // 로그인 성공 시 PotMainpage로 이동
                        <Route path="/" element={<PotMainpage />} />
                    ) : (
                        <>
                            {/* 로딩이 끝나면 기본 경로는 Login 페이지로 이동 */}
                            <Route path="/" element={<Login onLogin={handleLogin} />} />
                            {/* /signup 경로로 이동하면 Signup 페이지로 이동 */}
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/signup-step2" element={<Signup_2 />} />
                        </>
                    )}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
