import { Beaker, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./BenchmarksPage.css";

const benchmarks = [
    { id: "code-gen", name: "Code Generation", desc: "Generate correct Python/TS functions from specifications", category: "accuracy", tasks: 50, badge: "blue" },
    { id: "tool-use", name: "Tool Usage", desc: "Correctly call tools, parse responses, handle errors", category: "accuracy", tasks: 40, badge: "blue" },
    { id: "multi-step", name: "Multi-Step Reasoning", desc: "Chain logic across sequential analysis steps", category: "accuracy", tasks: 30, badge: "blue" },
    { id: "latency-p50", name: "P50 Latency", desc: "Median response time across standard prompts", category: "latency", tasks: 100, badge: "green" },
    { id: "latency-p99", name: "P99 Latency", desc: "99th percentile response time under load", category: "latency", tasks: 100, badge: "green" },
    { id: "throughput", name: "Throughput", desc: "Max concurrent requests with <2s response", category: "throughput", tasks: 200, badge: "yellow" },
    { id: "cost-per-task", name: "Cost per Task", desc: "Average USD per completed agent task", category: "cost", tasks: 50, badge: "red" },
    { id: "uptime", name: "API Reliability", desc: "Success rate over 1000 consecutive calls", category: "reliability", tasks: 1000, badge: "green" },
];

export default function BenchmarksPage() {
    return (
        <div className="bm-page">
            <div className="bm-header">
                <h1><Beaker size={20} /> Benchmarks</h1>
                <p>Test suites for evaluating agent model performance</p>
            </div>
            <div className="bm-grid">
                {benchmarks.map((b) => (
                    <Link to="/new-run" key={b.id} className="bm-card card">
                        <div className="bm-card-top">
                            <span className={`badge badge-${b.badge}`}>{b.category}</span>
                            <ChevronRight size={14} style={{ color: "var(--color-text-tertiary)" }} />
                        </div>
                        <h3>{b.name}</h3>
                        <p>{b.desc}</p>
                        <div className="bm-card-meta">
                            <span>{b.tasks} tasks</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
