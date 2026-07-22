from app.config import settings


def chunk_text(text: str) -> list[str]:
    words = text.split()
    chunks = []
    start = 0

    while start < len(words):
        end = start + settings.chunk_size
        chunk = " ".join(words[start:end])
        chunks.append(chunk)
        start = end - settings.chunk_overlap

    return chunks
