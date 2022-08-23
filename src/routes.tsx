import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import App from "./App";
import Report from "./pages/Report";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/job" element={<App />} />
            <Route path="/report" element={<Report />} />
        </Routes>
    );
};

export default Router;

