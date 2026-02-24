import { Settings, Github, Coffee } from "lucide-react";
import "./SettingsPage.css";

export default function SettingsPage() {
    return (
        <div className="set-page">
            <h1><Settings size={20} /> Settings</h1>
            <section className="set-section card">
                <h2>API Keys</h2>
                <div className="set-field"><label>OpenAI API Key</label><input type="password" className="input" placeholder="sk-..." /></div>
                <div className="set-field"><label>Anthropic API Key</label><input type="password" className="input" placeholder="sk-ant-..." /></div>
                <div className="set-field"><label>Google AI API Key</label><input type="password" className="input" placeholder="AIza..." /></div>
            </section>
            <section className="set-section card">
                <h2>Defaults</h2>
                <div className="set-field"><label>Default Concurrency</label><input type="number" className="input" defaultValue={5} /></div>
                <div className="set-field"><label>Timeout (seconds)</label><input type="number" className="input" defaultValue={60} /></div>
            </section>
            <section className="set-section card">
                <h2>About Claw Bench</h2>
                <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)", marginBottom: "var(--space-3)" }}>v0.1.0 · MIT License</p>
                <div style={{ display: "flex", gap: "var(--space-3)" }}>
                    <a href="https://github.com/mxn2020/claw-bench" className="btn btn-sm" target="_blank" rel="noopener noreferrer"><Github size={14} /> GitHub</a>
                    <a href="https://buymeacoffee.com/mxn2020" className="btn btn-sm" target="_blank" rel="noopener noreferrer"><Coffee size={14} /> Support</a>
                </div>
            </section>
        </div>
    );
}
