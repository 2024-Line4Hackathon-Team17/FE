import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PotMainpage from "./pages/PotMainpage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route>
                        <Route exact path="/" element={<PotMainpage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
