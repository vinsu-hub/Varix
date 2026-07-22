from app.config import settings


async def rag_query(query: str, context_chunks: list[str]) -> dict:
    context = "\n\n---\n\n".join(context_chunks)

    prompt = f"""You are Tessora, an enterprise document intelligence assistant.

Based on the following document context, answer the user's question.
Always cite which document or chunk your answer comes from.

CONTEXT:
{context}

QUESTION: {query}

ANSWER:"""

    # Phase 1: Replace with Groq API call
    return {
        "answer": f"[Placeholder] RAG pipeline ready. Query: {query}",
        "sources": [],
        "model": settings.groq_model,
    }
