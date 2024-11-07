import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PotMainpage from "./pages/PotMainpage";
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
