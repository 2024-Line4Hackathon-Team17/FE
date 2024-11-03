import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import ChatList from "./pages/ChatList";
import PotMainpage from "./pages/PotMainpage";
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/mypage" element={<Mypage />} />
                        <Route exact path="/chatlist" element={<ChatList />} />
                        <Route exact path="/" element={<PotMainpage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
