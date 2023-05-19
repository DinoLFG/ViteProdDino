import Leaderboard from "../pages/Leaderboard/Leaderboard";
import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Leaderboard />} />
      {/* <Route path="/" element={<Navigate to="/leaderboard" />} />*/}
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRouting;
