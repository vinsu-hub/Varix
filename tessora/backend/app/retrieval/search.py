from rank_bm25 import BM25Okapi

from app.retrieval.embedder import embed_query


_bm25 = None
_tokenized_corpus: list[list[str]] = []


def build_bm25_index(documents: list[str]):
    global _bm25, _tokenized_corpus
    _tokenized_corpus = [doc.lower().split() for doc in documents]
    _bm25 = BM25Okapi(_tokenized_corpus)


def bm25_search(query: str, top_k: int = 5) -> list[tuple[int, float]]:
    if _bm25 is None:
        return []
    tokenized_query = query.lower().split()
    scores = _bm25.get_scores(tokenized_query)
    ranked = sorted(enumerate(scores), key=lambda x: x[1], reverse=True)
    return ranked[:top_k]


async def hybrid_search(
    query: str,
    vector_results: list[dict],
    top_k: int = 5,
) -> list[dict]:
    bm25_results = bm25_search(query, top_k=top_k)

    combined = {}
    for r in vector_results:
        idx = r.get("index", 0)
        combined[idx] = {"score": r.get("score", 0), "source": "vector"}

    for idx, score in bm25_results:
        if idx in combined:
            combined[idx]["score"] += score * 0.3
            combined[idx]["source"] = "hybrid"
        else:
            combined[idx] = {"score": score * 0.3, "source": "bm25"}

    ranked = sorted(combined.items(), key=lambda x: x[1]["score"], reverse=True)
    return [{"index": idx, **data} for idx, data in ranked[:top_k]]
