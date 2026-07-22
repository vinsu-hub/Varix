from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.ingestion.router import router as ingestion_router
from app.retrieval.router import router as retrieval_router
from app.rag.router import router as rag_router

app = FastAPI(
    title="Tessora API",
    description="Enterprise Document Intelligence API",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ingestion_router, prefix="/api/v1/ingestion", tags=["ingestion"])
app.include_router(retrieval_router, prefix="/api/v1/retrieval", tags=["retrieval"])
app.include_router(rag_router, prefix="/api/v1/rag", tags=["rag"])


@app.get("/health")
def health_check():
    return {"status": "ok", "service": "tessora"}
