import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PotMainpage from "./pages/PotMainpage";
import PotSearch from "./pages/PotSearch";
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route>
                        <Route exact path="/" element={<PotMainpage />} />
                        <Route exact path="/search" element={<PotSearch />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
