import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PotMainpage from "./pages/PotMainpage";
import EmpathyCommunityPage from './pages/EmpathyCommunityPage';
import LiveChatListPage from './pages/live-chat/LiveChatListPage';
import LiveChatPage from './pages/live-chat/LiveChatPage';
import MyPage from './pages/mypage/MyPage';
import MyPageEmpathy from './pages/mypage/MyPageEmpathy';
import MyPageInfo from './pages/mypage/MyPageInfo';

function App() {
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
                </Routes>
            </Router>
        </div>
    );
}

export default App;
