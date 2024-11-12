import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PotMainpage from "./pages/PotMainpage";
import EmpathyCommunityPage from "./pages/EmpathyCommunityPage";
import LiveChatListPage from "./pages/live-chat/LiveChatListPage";
import LiveChatPage from "./pages/live-chat/LiveChatPage";
import MyPage from "./pages/mypage/MyPage";
import MyPageEmpathy from "./pages/mypage/MyPageEmpathy";
import MyPageInfo from "./pages/mypage/MyPageInfo";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; 
import Signup_2 from "./pages/Signup_2";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true); 
    };

    if (isLoading) {
        // 로딩 중일 때는 Loading 컴포넌트만 표시
        return <Loading />;
    }

    return (
        <div className="App">
            <Router>
                <Routes>
                    {/* 로그인 여부에 따라 기본 경로를 리디렉션 */}
                    <Route path="/" element={isLoggedIn ? <PotMainpage /> : <Navigate to="/login" />} />
                    
                    {/* 회원가입 단계 라우팅 */}
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signup-step2" element={<Signup_2 />} />

                    {/* 로그인 페이지 */}
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />

                    {/* 기능별 페이지 라우팅 */}
                    <Route path="/empathy" element={<EmpathyCommunityPage />} />
                    <Route path="/livechat" element={<LiveChatListPage />} />
                    <Route path="/livechat/id" element={<LiveChatPage />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/mypage/empathy" element={<MyPageEmpathy />} />
                    <Route path="/mypage/update/info" element={<MyPageInfo />} />
                    
                    {/* 404 페이지 처리를 위한 경로 */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
