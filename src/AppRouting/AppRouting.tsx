import Leaderboard from "../pages/Leaderboard/Leaderboard";
import { Route, Routes, Navigate } from "react-router-dom";
import ReplaceMePage from "../pages/ReplaceMePage/componentPage";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/" element={<Navigate to="/leaderboard" />} />
      <Route path="/replaceMe" element={<ReplaceMePage />} />
    </Routes>
  );
};

export default AppRouting;
