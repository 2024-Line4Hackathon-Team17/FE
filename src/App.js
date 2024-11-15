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

    if (isLoading) {
        // 로딩 중일 때는 Loading 컴포넌트만 표시
        return <Loading />;
    }

    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {
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

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
        // 토큰이 존재하면 true
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className="App">
            <Routes>
                {/* 로그인 여부에 따라 기본 경로를 리디렉션 */}
                <Route
                    path="/"
                    element={
                        isLoggedIn ? <PotMainpage /> : <Navigate to="/login" />
                    }
                />

                {/* 회원가입 및 로그인 페이지는 로그인 여부와 관계없이 접근 가능 */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/signup-step2" element={<Signup_2 />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />

                {/* 로그인된 상태에서만 접근 가능한 페이지 */}
                {isLoggedIn && (
                    <>
                        <Route path="/PotMainpage" element={<PotMainpage />} />
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

                {/* 로그인되지 않은 상태에서 로그인 필수 페이지에 접근하려고 하면 리디렉션 */}
                {!isLoggedIn && (
                    <Route path="*" element={<Navigate to="/login" />} />
                )}
            </Routes>

            {/* 현재 경로가 숨기려는 경로 목록에 없는 경우에만 Nav 표시 */}
            {hiddenNavPaths.includes(location.pathname) && <Nav />}
        </div>
    );
}

export default App;
