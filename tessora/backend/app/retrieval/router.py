from fastapi import APIRouter

router = APIRouter()


@router.post("/search")
async def search_documents(query: str, top_k: int = 5):
    return {
        "query": query,
        "results": [],
        "note": "Implement vector + BM25 hybrid search in Phase 1",
    }


@router.get("/health")
def retrieval_health():
    return {"status": "ok", "module": "retrieval"}
