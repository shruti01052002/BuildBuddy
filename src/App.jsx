import React from "react";
import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import Materials from "./materialcomp/Materials";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/materials/cement" element={<Materials />} />
                <Route path="/materials/bricks" element={<Materials />} />
                <Route path="/materials/steel" element={<Materials />} />
                <Route path="/materials/concrete" element={<Materials />} />
                <Route path="/materials/sand" element={<Materials />} />
                <Route path="/materials/glass" element={<Materials />} />
                <Route path="/materials/timber" element={<Materials />} />
            </Routes>
        </>
    );
}
export default App;
