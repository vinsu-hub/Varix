from fastapi import APIRouter

from app.rag.chain import rag_query

router = APIRouter()


@router.post("/query")
async def query_documents(question: str):
    result = await rag_query(question, context_chunks=[])
    return result


@router.get("/health")
def rag_health():
    return {"status": "ok", "module": "rag"}
