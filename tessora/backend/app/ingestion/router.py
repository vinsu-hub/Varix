from fastapi import APIRouter, UploadFile, File

from app.ingestion.parser import extract_text
from app.ingestion.chunker import chunk_text

router = APIRouter()


@router.post("/upload")
async def upload_document(file: UploadFile = File(...)):
    file_bytes = await file.read()
    text = extract_text(file.filename, file_bytes)
    chunks = chunk_text(text)

    return {
        "filename": file.filename,
        "total_chars": len(text),
        "total_chunks": len(chunks),
        "preview": chunks[0][:200] if chunks else "",
    }


@router.get("/health")
def ingestion_health():
    return {"status": "ok", "module": "ingestion"}
