import { Play } from "lucide-react";
import "./NewRunPage.css";

export default function NewRunPage() {
    return (
        <div className="nr-page">
            <h1><Play size={20} /> Start Benchmark Run</h1>
            <p>Configure and launch a new benchmark evaluation</p>

            <form className="nr-form" onSubmit={(e) => e.preventDefault()}>
                <section className="nr-section card">
                    <h2>Configuration</h2>
                    <div className="nr-field">
                        <label>Benchmark Suite</label>
                        <select className="input">
                            <option>Code Generation (50 tasks)</option>
                            <option>Tool Usage (40 tasks)</option>
                            <option>Multi-Step Reasoning (30 tasks)</option>
                            <option>P50 Latency (100 tasks)</option>
                            <option>P99 Latency (100 tasks)</option>
                            <option>Throughput (200 tasks)</option>
                            <option>Cost per Task (50 tasks)</option>
                            <option>API Reliability (1000 tasks)</option>
                        </select>
                    </div>
                    <div className="nr-field">
                        <label>Model</label>
                        <select className="input">
                            <option>GPT-4o</option>
                            <option>GPT-4o-mini</option>
                            <option>Claude 3.5 Sonnet</option>
                            <option>Claude 3 Haiku</option>
                            <option>Gemini 1.5 Pro</option>
                            <option>Llama 3.1 70B</option>
                            <option>Mistral Large</option>
                        </select>
                    </div>
                    <div className="nr-row">
                        <div className="nr-field">
                            <label>Max Tokens</label>
                            <input type="number" className="input" defaultValue={4096} />
                        </div>
                        <div className="nr-field">
                            <label>Temperature</label>
                            <input type="number" className="input" defaultValue={0.0} step={0.1} />
                        </div>
                        <div className="nr-field">
                            <label>Concurrency</label>
                            <input type="number" className="input" defaultValue={5} />
                        </div>
                    </div>
                </section>
                <button type="submit" className="btn btn-primary">
                    <Play size={14} /> Launch Benchmark
                </button>
            </form>
        </div>
    );
}
