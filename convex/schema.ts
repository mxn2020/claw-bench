import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    benchmarks: defineTable({
        name: v.string(),
        description: v.string(),
        category: v.union(
            v.literal("accuracy"),
            v.literal("latency"),
            v.literal("throughput"),
            v.literal("cost"),
            v.literal("reliability")
        ),
        tasks: v.number(),
        createdAt: v.string(),
        updatedAt: v.string(),
    }).index("by_category", ["category"]),

    runs: defineTable({
        benchmarkId: v.id("benchmarks"),
        model: v.string(),
        provider: v.string(),
        score: v.number(),
        accuracy: v.number(),
        avgLatencyMs: v.number(),
        totalTokens: v.number(),
        costUsd: v.number(),
        completedTasks: v.number(),
        totalTasks: v.number(),
        duration: v.string(),
        status: v.union(v.literal("completed"), v.literal("running"), v.literal("failed")),
        ranAt: v.string(),
    })
        .index("by_benchmark", ["benchmarkId"])
        .index("by_model", ["model"]),

    leaderboard: defineTable({
        model: v.string(),
        provider: v.string(),
        overallScore: v.number(),
        accuracyScore: v.number(),
        latencyScore: v.number(),
        costScore: v.number(),
        totalRuns: v.number(),
        lastRun: v.string(),
    }).index("by_score", ["overallScore"]),
});
