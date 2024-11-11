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

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 로딩 상태를 2초 후에 false로 설정 (예시)
        const timer = setTimeout(() => setIsLoading(false), 2000);
        
        // 컴포넌트 언마운트 시 타이머 정리
        return () => clearTimeout(timer);
    }, []);

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
                    ) : (
                        // 로딩이 끝나면 PotMainpage로 이동
                        <Route path="/" element={<PotMainpage />} />
                    )}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
