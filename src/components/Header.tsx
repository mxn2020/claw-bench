import { Link, useLocation } from "react-router-dom";
import { Beaker, BarChart3, Trophy, Play, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";

const links = [
    { to: "/", icon: Trophy, label: "Leaderboard" },
    { to: "/benchmarks", icon: Beaker, label: "Benchmarks" },
    { to: "/runs", icon: BarChart3, label: "Runs" },
    { to: "/new-run", icon: Play, label: "New Run" },
    { to: "/settings", icon: Settings, label: "Settings" },
];

export default function Header() {
    const location = useLocation();
    return (
        <header className="cb-header">
            <div className="cb-header-inner">
                <Link to="/" className="cb-logo">
                    <Beaker size={18} />
                    <span>Claw<span className="gradient-text">Bench</span></span>
                </Link>
                <nav className="cb-nav">
                    {links.map((l) => (
                        <Link
                            key={l.to}
                            to={l.to}
                            className={`cb-nav-link ${location.pathname === l.to ? "active" : ""}`}
                        >
                            <l.icon size={14} />
                            <span>{l.label}</span>
                        </Link>
                    ))}
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
}
