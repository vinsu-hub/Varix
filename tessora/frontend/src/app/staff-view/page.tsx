"use client";

import { useState } from "react";

export default function StaffView() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: query },
      { role: "assistant", content: "RAG pipeline coming in Phase 1. This is a placeholder response." },
    ]);
    setQuery("");
  };

  return (
    <main className="min-h-screen flex flex-col p-8">
      <h1 className="text-2xl font-bold mb-6">Staff Portal</h1>
      <div className="flex-1 overflow-y-auto mb-6 space-y-4">
        {messages.length === 0 && (
          <p className="opacity-70 text-center mt-20">
            Ask a question about your documents.
          </p>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-4 rounded-lg ${
              msg.role === "user"
                ? "bg-blue-600 text-white ml-auto max-w-[70%]"
                : "border border-current max-w-[70%]"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about your documents..."
          className="flex-1 px-4 py-3 rounded-lg border border-current bg-transparent"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Ask
        </button>
      </form>
    </main>
  );
}
