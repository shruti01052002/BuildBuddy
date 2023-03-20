import React from "react";
import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import Materials from "./materialcomp/Materials";
import Build from "./buildercomp/Build";
import LoginForm from "./components/LoginForm";
import CustomerForm from "./components/CustomerForm";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/BuildBuddy" element={<LandingPage />} />
                <Route path="/BuildBuddy/signup" element={<LoginForm />} />
                <Route path="/BuildBuddy/signup/customers" element={<CustomerForm />} />
                <Route path="/BuildBuddy/materials/cement" element={<Materials />} />
                <Route path="/BuildBuddy/materials/bricks" element={<Materials />} />
                <Route path="/BuildBuddy/materials/steel" element={<Materials />} />
                <Route path="/BuildBuddy/materials/concrete" element={<Materials />} />
                <Route path="/BuildBuddy/materials/sand" element={<Materials />} />
                <Route path="/BuildBuddy/materials/glass" element={<Materials />} />
                <Route path="/BuildBuddy/materials/timber" element={<Materials />} />
                <Route path="/BuildBuddy/builders" element={<Build />} />
            </Routes>
        </>
    );
}
export default App;
