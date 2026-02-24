import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        if (typeof window !== "undefined") {
            return (localStorage.getItem("cb-theme") as "light" | "dark") || "light";
        }
        return "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("cb-theme", theme);
    }, [theme]);

    return (
        <button
            className="btn btn-icon btn-ghost"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </button>
    );
}
