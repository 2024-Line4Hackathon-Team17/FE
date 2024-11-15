import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
    BrowserRouter,
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
        <BrowserRouter>
            <AppContent isLoggedIn={isLoggedIn} onLogin={handleLogin} />
        </BrowserRouter>
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
            {shouldShowNav && <Nav />}

            <Routes>
                <Route
                    path="/"
                    element={
                        isLoggedIn ? <PotMainpage /> : <Navigate to="/login" />
                    }
                />

                {/* 로그인 및 회원가입 페이지 */}
                <Route path="/login" element={<Login onLogin={onLogin} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signup-step2" element={<Signup_2 />} />

                {/* 로그인 여부에 따라 기본 경로 렌더링 */}
                {isLoggedIn && (
                    <>
                        <Route
                            path="/empathy"
                            element={<EmpathyCommunityPage />}
                        />
                        <Route
                            path="/livechat"
                            element={<LiveChatListPage />}
                        />
                        <Route
                            path="/livechat/:chat_room_id"
                            element={<LiveChatPage />}
                        />
                        <Route path="/mypage" element={<MyPage />} />
                        <Route
                            path="/mypage/empathy"
                            element={<MyPageEmpathy />}
                        />
                        <Route
                            path="/mypage/update/info"
                            element={<MyPageInfo />}
                        />
                        <Route path="/mypage/poting" element={<MyPagePot />} />
                        <Route
                            path="/mypage/poting/attend"
                            element={<MyPagePotAttend />}
                        />
                        <Route path="/notice" element={<NoticePage />} />
                        <Route path="/search" element={<PotSearch />} />

                        {/* OnedayClassHome 페이지 경로 추가 */}
                        <Route
                            path="/onedayclass"
                            element={<OnedayClassHome />}
                        />
                        <Route
                            path="/onedayclass-category"
                            element={<OnedayClass_category />}
                        />
                    </>
                )}

            </Routes>
        </div>
    );
}

export default App;
