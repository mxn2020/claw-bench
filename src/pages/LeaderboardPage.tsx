import { Trophy, Medal, ArrowUp, ArrowDown, Minus } from "lucide-react";
import { Card } from "@geenius-ui/react-css";
import "./LeaderboardPage.css";

const leaderboard = [
    { rank: 1, model: "GPT-4o", provider: "OpenAI", overall: 94.2, accuracy: 96.1, latency: 88.5, cost: 72.0, runs: 48, trend: "up" as const },
    { rank: 2, model: "Claude 3.5 Sonnet", provider: "Anthropic", overall: 93.8, accuracy: 95.4, latency: 85.2, cost: 78.3, runs: 42, trend: "up" as const },
    { rank: 3, model: "Gemini 1.5 Pro", provider: "Google", overall: 91.5, accuracy: 93.2, latency: 90.1, cost: 81.5, runs: 35, trend: "same" as const },
    { rank: 4, model: "GPT-4o-mini", provider: "OpenAI", overall: 87.3, accuracy: 84.8, latency: 94.2, cost: 95.1, runs: 56, trend: "up" as const },
    { rank: 5, model: "Claude 3 Haiku", provider: "Anthropic", overall: 85.1, accuracy: 82.3, latency: 96.5, cost: 97.8, runs: 38, trend: "same" as const },
    { rank: 6, model: "Llama 3.1 70B", provider: "Meta", overall: 82.8, accuracy: 81.1, latency: 79.3, cost: 98.2, runs: 28, trend: "down" as const },
    { rank: 7, model: "Mistral Large", provider: "Mistral", overall: 80.4, accuracy: 79.5, latency: 82.1, cost: 85.6, runs: 22, trend: "down" as const },
    { rank: 8, model: "GPT-3.5 Turbo", provider: "OpenAI", overall: 72.1, accuracy: 68.4, latency: 95.8, cost: 98.5, runs: 64, trend: "same" as const },
];

function getScoreColor(score: number) {
    if (score >= 90) return "var(--color-success)";
    if (score >= 80) return "var(--color-accent-primary)";
    if (score >= 70) return "var(--color-warning)";
    return "var(--color-error)";
}

function TrendIcon({ trend }: { trend: "up" | "down" | "same" }) {
    if (trend === "up") return <ArrowUp size={12} style={{ color: "var(--color-success)" }} />;
    if (trend === "down") return <ArrowDown size={12} style={{ color: "var(--color-error)" }} />;
    return <Minus size={12} style={{ color: "var(--color-text-tertiary)" }} />;
}

export default function LeaderboardPage() {
    return (
        <div className="lb-page">
            <div className="lb-header">
                <h1><Trophy size={20} /> Model Leaderboard</h1>
                <p>Comparing LLM performance across agent benchmarks</p>
            </div>

            <Card padding="none" className="lb-table-wrap">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Model</th>
                            <th>Provider</th>
                            <th>Overall</th>
                            <th>Accuracy</th>
                            <th>Latency</th>
                            <th>Cost</th>
                            <th>Runs</th>
                            <th>Trend</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboard.map((m) => (
                            <tr key={m.rank}>
                                <td>
                                    <span className={`lb-rank ${m.rank <= 3 ? "top" : ""}`}>
                                        {m.rank <= 3 ? <Medal size={14} /> : m.rank}
                                    </span>
                                </td>
                                <td><strong>{m.model}</strong></td>
                                <td style={{ color: "var(--color-text-secondary)" }}>{m.provider}</td>
                                <td>
                                    <div className="lb-score">
                                        <span style={{ color: getScoreColor(m.overall), fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                                            {m.overall.toFixed(1)}
                                        </span>
                                        <div className="score-bar" style={{ width: 60 }}>
                                            <div className="score-bar-fill" style={{ width: `${m.overall}%`, background: getScoreColor(m.overall) }} />
                                        </div>
                                    </div>
                                </td>
                                <td style={{ fontFamily: "var(--font-mono)" }}>{m.accuracy.toFixed(1)}</td>
                                <td style={{ fontFamily: "var(--font-mono)" }}>{m.latency.toFixed(1)}</td>
                                <td style={{ fontFamily: "var(--font-mono)" }}>{m.cost.toFixed(1)}</td>
                                <td style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>{m.runs}</td>
                                <td><TrendIcon trend={m.trend} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
