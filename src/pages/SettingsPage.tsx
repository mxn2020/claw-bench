import { Settings, Github, Coffee } from "lucide-react";
import { Button, Card, Input, Label } from "@geenius-ui/react-css";
import "./SettingsPage.css";

export default function SettingsPage() {
    return (
        <div className="set-page">
            <h1><Settings size={20} /> Settings</h1>
            <Card padding="lg" className="set-section">
                <h2>API Keys</h2>
                <div className="set-field"><Label>OpenAI API Key</Label><Input type="password" placeholder="sk-..." /></div>
                <div className="set-field"><Label>Anthropic API Key</Label><Input type="password" placeholder="sk-ant-..." /></div>
                <div className="set-field"><Label>Google AI API Key</Label><Input type="password" placeholder="AIza..." /></div>
            </Card>
            <Card padding="lg" className="set-section">
                <h2>Defaults</h2>
                <div className="set-field"><Label>Default Concurrency</Label><Input type="number" defaultValue={5} /></div>
                <div className="set-field"><Label>Timeout (seconds)</Label><Input type="number" defaultValue={60} /></div>
            </Card>
            <Card padding="lg" className="set-section">
                <h2>About Claw Bench</h2>
                <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)", marginBottom: "var(--space-3)" }}>v0.1.0 · MIT License</p>
                <div style={{ display: "flex", gap: "var(--space-3)" }}>
                    <a href="https://github.com/mxn2020/claw-bench" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="sm" icon={<Github size={14} />}>GitHub</Button></a>
                    <a href="https://buymeacoffee.com/mxn2020" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="sm" icon={<Coffee size={14} />}>Support</Button></a>
                </div>
            </Card>
        </div>
    );
}
