import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import Header from "../components/Header";
import LeaderboardPage from "../pages/LeaderboardPage";
import BenchmarksPage from "../pages/BenchmarksPage";
import RunsPage from "../pages/RunsPage";
import NewRunPage from "../pages/NewRunPage";
import SettingsPage from "../pages/SettingsPage";
import userEvent from "@testing-library/user-event";

function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("ThemeToggle", () => {
    it("renders toggle", () => { render(<ThemeToggle />); expect(screen.getByRole("button", { name: /switch to/i })).toBeInTheDocument(); });
    it("toggles to dark", async () => { const u = userEvent.setup(); render(<ThemeToggle />); await u.click(screen.getByRole("button")); expect(document.documentElement.getAttribute("data-theme")).toBe("dark"); });
});

describe("Header", () => {
    it("renders nav items", () => { wrap(<Header />); expect(screen.getByText("Leaderboard")).toBeInTheDocument(); expect(screen.getByText("Benchmarks")).toBeInTheDocument(); expect(screen.getByText("Runs")).toBeInTheDocument(); });
});

describe("LeaderboardPage", () => {
    it("renders leaderboard", () => { wrap(<LeaderboardPage />); expect(screen.getByText("Model Leaderboard")).toBeInTheDocument(); });
    it("shows all 8 models", () => { wrap(<LeaderboardPage />); expect(screen.getByText("GPT-4o")).toBeInTheDocument(); expect(screen.getByText("Claude 3.5 Sonnet")).toBeInTheDocument(); expect(screen.getByText("GPT-3.5 Turbo")).toBeInTheDocument(); });
});

describe("BenchmarksPage", () => {
    it("renders benchmark suites", () => { wrap(<BenchmarksPage />); expect(screen.getByText("Code Generation")).toBeInTheDocument(); expect(screen.getByText("Tool Usage")).toBeInTheDocument(); });
    it("shows 8 benchmarks", () => { wrap(<BenchmarksPage />); expect(screen.getByText("API Reliability")).toBeInTheDocument(); });
});

describe("RunsPage", () => {
    it("renders runs history", () => { wrap(<RunsPage />); expect(screen.getByText("Benchmark Runs")).toBeInTheDocument(); });
    it("shows run statuses", () => { wrap(<RunsPage />); expect(screen.getAllByText("Completed").length).toBeGreaterThan(0); });
});

describe("NewRunPage", () => {
    it("renders form", () => { wrap(<NewRunPage />); expect(screen.getByText("Start Benchmark Run")).toBeInTheDocument(); expect(screen.getByText("Launch Benchmark")).toBeInTheDocument(); });
});

describe("SettingsPage", () => {
    it("renders settings", () => { wrap(<SettingsPage />); expect(screen.getByText("API Keys")).toBeInTheDocument(); expect(screen.getByText("Defaults")).toBeInTheDocument(); });
});
