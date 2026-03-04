import { BarChart3, CheckCircle, XCircle, Clock } from "lucide-react";
import { Card, Badge } from "@geenius-ui/react-css";
import "./RunsPage.css";

const runs = [
    { id: "r1", benchmark: "Code Generation", model: "GPT-4o", score: 94.2, status: "completed" as const, tasks: "50/50", duration: "4m 32s", cost: "$1.24", date: "2 hours ago" },
    { id: "r2", benchmark: "Tool Usage", model: "Claude 3.5 Sonnet", score: 91.8, status: "completed" as const, tasks: "39/40", duration: "3m 15s", cost: "$0.98", date: "3 hours ago" },
    { id: "r3", benchmark: "Multi-Step Reasoning", model: "GPT-4o", score: 88.5, status: "completed" as const, tasks: "27/30", duration: "8m 10s", cost: "$2.15", date: "5 hours ago" },
    { id: "r4", benchmark: "P50 Latency", model: "Gemini 1.5 Pro", score: 92.1, status: "completed" as const, tasks: "100/100", duration: "6m 45s", cost: "$1.80", date: "6 hours ago" },
    { id: "r5", benchmark: "Throughput", model: "GPT-4o-mini", score: 0, status: "running" as const, tasks: "142/200", duration: "—", cost: "$0.42", date: "running now" },
    { id: "r6", benchmark: "Code Generation", model: "Llama 3.1 70B", score: 0, status: "failed" as const, tasks: "12/50", duration: "1m 05s", cost: "$0.08", date: "8 hours ago" },
    { id: "r7", benchmark: "API Reliability", model: "Claude 3 Haiku", score: 99.1, status: "completed" as const, tasks: "991/1000", duration: "12m 30s", cost: "$0.45", date: "1 day ago" },
    { id: "r8", benchmark: "Cost per Task", model: "GPT-3.5 Turbo", score: 98.5, status: "completed" as const, tasks: "50/50", duration: "2m 10s", cost: "$0.03", date: "1 day ago" },
];

function StatusBadge({ status }: { status: "completed" | "running" | "failed" }) {
    if (status === "completed") return <Badge variant="success"><CheckCircle size={10} /> Completed</Badge>;
    if (status === "running") return <Badge variant="info"><Clock size={10} /> Running</Badge>;
    return <Badge variant="error"><XCircle size={10} /> Failed</Badge>;
}

export default function RunsPage() {
    return (
        <div className="runs-page">
            <div className="runs-header">
                <h1><BarChart3 size={20} /> Benchmark Runs</h1>
                <p>History of all benchmark executions</p>
            </div>
            <Card padding="none" className="runs-table-wrap">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Benchmark</th>
                            <th>Model</th>
                            <th>Score</th>
                            <th>Tasks</th>
                            <th>Duration</th>
                            <th>Cost</th>
                            <th>Status</th>
                            <th>When</th>
                        </tr>
                    </thead>
                    <tbody>
                        {runs.map((r) => (
                            <tr key={r.id}>
                                <td><strong>{r.benchmark}</strong></td>
                                <td>{r.model}</td>
                                <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: r.score >= 90 ? "var(--color-success)" : r.score >= 80 ? "var(--color-accent-primary)" : "var(--color-text-tertiary)" }}>
                                    {r.status === "completed" ? r.score.toFixed(1) : "—"}
                                </td>
                                <td style={{ fontFamily: "var(--font-mono)" }}>{r.tasks}</td>
                                <td style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>{r.duration}</td>
                                <td style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>{r.cost}</td>
                                <td><StatusBadge status={r.status} /></td>
                                <td style={{ color: "var(--color-text-tertiary)", fontSize: "var(--font-size-xs)" }}>{r.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
