import { Play } from "lucide-react";
import { Button, Card, Input, Label, Select, SelectItem } from "@geenius-ui/react-css";
import "./NewRunPage.css";

export default function NewRunPage() {
    return (
        <div className="nr-page">
            <h1><Play size={20} /> Start Benchmark Run</h1>
            <p>Configure and launch a new benchmark evaluation</p>

            <form className="nr-form" onSubmit={(e) => e.preventDefault()}>
                <Card padding="lg" className="nr-section">
                    <h2>Configuration</h2>
                    <div className="nr-field">
                        <Label>Benchmark Suite</Label>
                        <Select defaultValue="code-gen">
                            <SelectItem value="code-gen">Code Generation (50 tasks)</SelectItem>
                            <SelectItem value="tool-use">Tool Usage (40 tasks)</SelectItem>
                            <SelectItem value="multi-step">Multi-Step Reasoning (30 tasks)</SelectItem>
                            <SelectItem value="p50">P50 Latency (100 tasks)</SelectItem>
                            <SelectItem value="p99">P99 Latency (100 tasks)</SelectItem>
                            <SelectItem value="throughput">Throughput (200 tasks)</SelectItem>
                            <SelectItem value="cost">Cost per Task (50 tasks)</SelectItem>
                            <SelectItem value="uptime">API Reliability (1000 tasks)</SelectItem>
                        </Select>
                    </div>
                    <div className="nr-field">
                        <Label>Model</Label>
                        <Select defaultValue="gpt-4o">
                            <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                            <SelectItem value="gpt-4o-mini">GPT-4o-mini</SelectItem>
                            <SelectItem value="claude-3.5-sonnet">Claude 3.5 Sonnet</SelectItem>
                            <SelectItem value="claude-3-haiku">Claude 3 Haiku</SelectItem>
                            <SelectItem value="gemini-1.5-pro">Gemini 1.5 Pro</SelectItem>
                            <SelectItem value="llama-3.1-70b">Llama 3.1 70B</SelectItem>
                            <SelectItem value="mistral-large">Mistral Large</SelectItem>
                        </Select>
                    </div>
                    <div className="nr-row">
                        <div className="nr-field">
                            <Label>Max Tokens</Label>
                            <Input type="number" defaultValue={4096} />
                        </div>
                        <div className="nr-field">
                            <Label>Temperature</Label>
                            <Input type="number" defaultValue={0.0} step={0.1} />
                        </div>
                        <div className="nr-field">
                            <Label>Concurrency</Label>
                            <Input type="number" defaultValue={5} />
                        </div>
                    </div>
                </Card>
                <Button variant="primary" type="submit" icon={<Play size={14} />}>
                    Launch Benchmark
                </Button>
            </form>
        </div>
    );
}
