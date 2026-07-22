const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function healthCheck() {
  const res = await fetch(`${API_BASE}/health`);
  return res.json();
}

export async function uploadDocument(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/api/v1/ingestion/upload`, {
    method: "POST",
    body: formData,
  });
  return res.json();
}

export async function queryDocuments(question: string) {
  const res = await fetch(`${API_BASE}/api/v1/rag/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  });
  return res.json();
}
