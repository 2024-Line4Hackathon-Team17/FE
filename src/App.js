import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
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
import Nav from "./components/Nav/Nav";
import OnedayClassHome from "./pages/Onedayclass/OnedayClassHome";
import OnedayClass_category from "./pages/Onedayclass/OnedayClass_category";
import MyPagePot from "./pages/mypage/MyPagePot";
import MyPagePotAttend from "./pages/mypage/MyPagePotAttend";
import NoticePage from "./pages/notice/NoticePage";
import PotSearch from "./pages/PotSearch";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 로그인 상태 확인 및 로딩 관리
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token); // 토큰이 존재하면 true
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Router>
            <AppContent isLoggedIn={isLoggedIn} onLogin={handleLogin} />
        </Router>
    );
}

function AppContent({ isLoggedIn, onLogin }) {
    const location = useLocation();
    const hiddenNavPaths = [
        "/",
        "/PotMainpage",
        "/empathy",
        "/livechat",
        "/mypage",
        "/mypage/empathy",
        "/mypage/update/info",
        "/mypage/poting",
        "/mypage/poting/attend",
        "/notice",
        "/search",
        "/onedayclass",
        "/onedayclass-category",
    ];

    return (
        <div className="App">
            <Routes>
                {/* 기본 경로 */}
                <Route
                    path="/"
                    element={
                        isLoggedIn ? <PotMainpage /> : <Navigate to="/login" />
                    }
                />

                {/* 로그인과 회원가입 경로 */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/signup-step2" element={<Signup_2 />} />
                <Route path="/login" element={<Login onLogin={onLogin} />} />

                {/* 보호된 페이지 */}
                <Route
                    path="/PotMainpage"
                    element={
                        isLoggedIn ? <PotMainpage /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/empathy"
                    element={
                        isLoggedIn ? (
                            <EmpathyCommunityPage />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/livechat"
                    element={
                        isLoggedIn ? (
                            <LiveChatListPage />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/livechat/:chat_room_id"
                    element={
                        isLoggedIn ? <LiveChatPage /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/mypage"
                    element={isLoggedIn ? <MyPage /> : <Navigate to="/login" />}
                />
                <Route
                    path="/mypage/empathy"
                    element={
                        isLoggedIn ? <MyPageEmpathy /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/mypage/update/info"
                    element={
                        isLoggedIn ? <MyPageInfo /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/mypage/poting"
                    element={
                        isLoggedIn ? <MyPagePot /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/mypage/poting/attend"
                    element={
                        isLoggedIn ? (
                            <MyPagePotAttend />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/notice"
                    element={
                        isLoggedIn ? <NoticePage /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/search"
                    element={
                        isLoggedIn ? <PotSearch /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/onedayclass"
                    element={
                        isLoggedIn ? (
                            <OnedayClassHome />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/onedayclass-category"
                    element={
                        isLoggedIn ? (
                            <OnedayClass_category />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />

                {/* 404 페이지 */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            {/* 네비게이션 표시 조건 */}
            {hiddenNavPaths.includes(location.pathname) && <Nav />}
        </div>
    );
}

export default App;
