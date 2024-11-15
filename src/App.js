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

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token); // 토큰이 존재하면 true
        setIsLoading(false); // 로딩 완료
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
    const shouldShowNavPaths = [
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

    const shouldShowNav = shouldShowNavPaths.includes(location.pathname);

    return (
        <div className="App">
            {/* NavBar를 특정 경로에서만 표시 */}
            {shouldShowNav && <Nav isLoggedIn={isLoggedIn} />}

            <Routes>
                {/* 로그인과 회원가입 경로 */}
                <Route path="/login" element={<Login onLogin={onLogin} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signup-step2" element={<Signup_2 />} />

                {/* 보호된 경로 */}
                <Route
                    path="/"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <PotMainpage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/empathy"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <EmpathyCommunityPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/livechat"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <LiveChatListPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/livechat/:chat_room_id"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <LiveChatPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/mypage"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <MyPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/mypage/empathy"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <MyPageEmpathy />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/mypage/update/info"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <MyPageInfo />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/mypage/poting"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <MyPagePot />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/mypage/poting/attend"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <MyPagePotAttend />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/notice"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <NoticePage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/search"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <PotSearch />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/onedayclass"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <OnedayClassHome />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/onedayclass-category"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <OnedayClass_category />
                        </ProtectedRoute>
                    }
                />

                {/* 404 페이지 */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

function ProtectedRoute({ children, isLoggedIn }) {
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default App;
