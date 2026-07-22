import io
from pathlib import Path


def extract_text_from_pdf(file_bytes: bytes) -> str:
    import pymupdf

    doc = pymupdf.open(stream=file_bytes, filetype="pdf")
    pages = [page.get_text() for page in doc]
    doc.close()
    return "\n\n".join(pages)


def extract_text_from_docx(file_bytes: bytes) -> str:
    from docx import Document

    doc = Document(io.BytesIO(file_bytes))
    return "\n\n".join(para.text for para in doc.paragraphs if para.text.strip())


EXTRACTORS = {
    ".pdf": extract_text_from_pdf,
    ".docx": extract_text_from_docx,
}


def extract_text(filename: str, file_bytes: bytes) -> str:
    suffix = Path(filename).suffix.lower()
    extractor = EXTRACTORS.get(suffix)
    if not extractor:
        raise ValueError(f"Unsupported file type: {suffix}")
    return extractor(file_bytes)
