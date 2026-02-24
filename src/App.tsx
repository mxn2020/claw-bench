import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import LeaderboardPage from "./pages/LeaderboardPage";
import BenchmarksPage from "./pages/BenchmarksPage";
import RunsPage from "./pages/RunsPage";
import NewRunPage from "./pages/NewRunPage";
import SettingsPage from "./pages/SettingsPage";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LeaderboardPage />} />
          <Route path="/benchmarks" element={<BenchmarksPage />} />
          <Route path="/runs" element={<RunsPage />} />
          <Route path="/new-run" element={<NewRunPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
